import React, { useState } from "react";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { LinkedIn } from '@material-ui/icons';

import UserDataForm from "./UserDataForm";
import AvailableSlots from "./AvailableSlots";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    //height: '100%',
    '& > *': {
      flexBasis: 0
    },
    "@media(max-width: 700px)": {
      padding: theme.spacing(1),
    },
  },
  slotGrid: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    "@media(max-width: 700px)": {
      maxHeight: "40vh",
    },

    // maxHeight: '500px',
    // border: '1px solid #1c4e6ba3',
    //overflow: 'auto',
  },
  slotHeading: {
    borderBottom: "1px solid #1c4e6ba3",
    marginTop: 0,
    marginRight: -theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: -theme.spacing(1),
    textAlign: "center",
  },

  bookSlotBtn: {
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  /* footer: {
    backgroundColor: 'black', //#0a4e6b
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  } */
}));
const LandingPageView = (props) => {
  const [refreshRedults, setRefreshRedults] = useState(0);
  const history = useHistory();

  const updatesearchResult = () => {
    setRefreshRedults((preState) => preState + 1);
  };

  const searchHandler = (districtId, ageGroup, shouldRefresh) => {
    if (shouldRefresh) {
      updatesearchResult();
    }
    history.push(
      `/home/nextAvailableSlots?districtId=${districtId}&minAge=${ageGroup}`
    );
  };

  const slotBookHandler = () => {
    window.open("https://www.cowin.gov.in/home");
  };

  const contactUsHandler = () => {
    window.open();
  }

  const linkedInRedirectHandler = (linkedInId) => {
    window.open(linkedInId);
  }

  const classes = useStyles();
  return (
    <Grid
      style={{ width: "100%" }}
      className={classes.root}
      container
      direction="column"
    >
      <Grid item xs={12} md={12} lg={12} xl={12}>
        <UserDataForm searchHandler={searchHandler} />
      </Grid>
      <Route path="/home/nextAvailableSlots">
        <Grid item xs={12} md={12} lg={12} xl={12} className={classes.slotGrid}>
          <AvailableSlots refreshRedults={refreshRedults} />
          <Box width="100%" display="flex" justifyContent="center">
            <Button
              className={classes.bookSlotBtn}
              color="primary"
              variant="contained"
              onClick={slotBookHandler}
            >
              Book your slot
            </Button>
          </Box>
       </Grid>
      </Route>
      {/* <Box flexGrow="1"/>
      <Grid item xs={12} md={12} lg={12} xl={12} >
        <Box className={classes.footer}>
          <Box justifyContent="center" width="100%" padding="0.5rem 0" display="flex">
            <Button variant="outlined" style={{color: 'white'}}>Contact us</Button>
          </Box>
          <Box width="100%" display="flex" justifyContent="space-evenly" padding="0.5rem 0">
            <Button variant="outlined" style={{color: 'white'}} startIcon={<LinkedIn />}>Shridutt Patel</Button>
            <Button variant="outlined" style={{color: 'white'}} startIcon={<LinkedIn />}>Khush Gandhi</Button>
            <Button variant="outlined" style={{color: 'white'}} startIcon={<LinkedIn />}>Sagar Chauhan</Button>
          </Box>
        </Box>
      </Grid> */}
    </Grid>
  );
};
export default LandingPageView;
