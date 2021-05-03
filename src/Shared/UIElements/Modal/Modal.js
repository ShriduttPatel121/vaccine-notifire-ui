import React, { forwardRef, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Button,
  TextField,
  CircularProgress
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
  let { open, onCloseModal, title, userData, stateId, districtId, unSubScribe } = props;

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
            await sendRequest('http://65.0.93.90:9090/vaccine-notifier/addSubscriber', "POST", JSON.stringify(body), { "Content-Type": "application/json" });
            alert('You have successfully subcribed for email notification, you will receive an email as soon as centers are available');
          } catch (e) {
            console.log(e);
            alert('Sorry somthing went wrong, please try again later.');
          }
      } else {
        const body = {
            emailId
        }

        try {
            await sendRequest('http://65.0.93.90:9090/vaccine-notifier/deleteSubscriber', "POST", JSON.stringify(body), { "Content-Type": "application/json" });
            alert('You have successfully un-subscribe for email notification, you will not receive any email.');
          } catch (e) {
            console.log(e);
            alert('Sorry somthing went wrong, please try again later.');
          }

          onCloseModal();
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
              {!isLoading ? <Button className={classes.btn} variant="contained" color="primary" disabled={!isEmail} onClick={() => registerForNotification(email)}>Submit</Button> :<div style={{height : '100%', display : 'flex', justifyContent : 'center', alignItems : 'center', width: '100%'}}><CircularProgress size={30}/> </div> }
          </DialogActions>
      </Dialog>
  );
};
export default Modal;
