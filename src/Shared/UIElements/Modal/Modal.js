import React, { forwardRef, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
  TextField
} from "@material-ui/core";

import { makeStyles } from '@material-ui/styles';
import { useHttpClient } from '../../hooks/http-hook';

const useStyle = makeStyles( (theme) => ({
  root : {
    '& .MuiDialog-paperWidthSm' : {
      width : '40vw',
    },
    '& .MuiDialogTitle-root' : {
      backgroundColor : theme.palette.primary.main,
      color : 'white'
    },
    /* '& .MuiDialogContent-root' : {
      padding : 0
    } */
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },
  actions : {
    padding : '10px'
  },
  btn: {
      '&:disabled' : {
          cursor: 'not-allowed'
      },
      margin: 'auto'
  }
}));

const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const Transition = forwardRef((props, ref) => {
    return <Slide direction="down" ref={ref} {...props} />;
  });

const Modal = (props) => {
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const { isLoading, sendRequest } = useHttpClient();
  let { open, onCloseModal, title, children, userData, stateId, districtId, unSubScribe } = props;

  const registerForNotification = async (emailId) => {
      
      if (!unSubScribe){
        const { ageGroup } = userData;
        const body = {
            minAge: ageGroup,
            districtId,
            stateId,
            emailId
        }
        try {
            const response = await sendRequest('http://65.0.93.90:9090/vaccine-notifier/addSubscriber', "POST", JSON.stringify(body), { "Content-Type": "application/json" });
          } catch (e) {
            console.log(e);
          }
      } else {
        const body = {
            emailId
        }

        try {
            const response = await sendRequest('http://65.0.93.90:9090/vaccine-notifier/deleteSubscriber', "DELETE", JSON.stringify(body), { "Content-Type": "application/json" });
          } catch (e) {
            console.log(e);
          }
      }
  }
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    const isValid = pattern.test(e.target.value);
    setIsEmail(isValid);
  }
  return (
      <Dialog 
      open={open}
      TransitionComponent={Transition}
      onClose={onCloseModal}
      className={classes.root}
      >
          <DialogTitle>{title}</DialogTitle>
          <DialogContent className={classes.content}>
            {/* {children} */}
            <TextField fullWidth variant="outlined" label="Email" value={email} onChange={emailChangeHandler} required/>
          </DialogContent>
          <DialogActions className={classes.actions}>
              <Button className={classes.btn} variant="contained" color="primary" disabled={!isEmail} onClick={() => registerForNotification(email)}>Submit</Button>
          </DialogActions>
      </Dialog>
  );
};
export default Modal;
