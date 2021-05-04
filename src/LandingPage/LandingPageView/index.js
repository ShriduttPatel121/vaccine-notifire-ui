import React, { useState } from 'react';
import { Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Route } from 'react-router-dom';

import UserDataForm from './UserDataForm';
import AvailableSlots from './AvailableSlots';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        '@media(max-width: 700px)': {
            padding: theme.spacing(1)
        }
    },
    slotGrid: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(1),
        '@media(max-width: 700px)': {
            maxHeight: '40vh'
        }

        // maxHeight: '500px',
        // border: '1px solid #1c4e6ba3',
        //overflow: 'auto',
    },
    slotHeading: {
        borderBottom: '1px solid #1c4e6ba3',
        marginTop: 0,
        marginRight: -theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: -theme.spacing(1),
        textAlign: 'center',
    },

    bookSlotBtn: {
        margin: 'auto',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));
const LandingPageView =  (props) =>{

    const [refreshRedults, setRefreshRedults] = useState(0);

    const updatesearchResult = () => {
        setRefreshRedults(preState => preState + 1);
    }

    const slotBookHandler = () => {
        window.open("https://www.cowin.gov.in/home");
      }

    const classes = useStyles();
    return(
        <Grid style={{width: '100%'}} className={classes.root} container direction="column">
            <Grid item xs={12} md={12} lg={12} xl={12}>
                <UserDataForm setRefreshRedults={updatesearchResult}/>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12} className={classes.slotGrid}>
                <Route path="/home/nextAvailableSlots" >
                    <AvailableSlots refreshRedults={refreshRedults}/>
                    <Box width="100%" display="flex" justifyContent="center">
                    <Button className={classes.bookSlotBtn} color="primary" variant="contained" onClick={slotBookHandler} >Book your slot</Button>
                    </Box>
                </Route>
            </Grid>
        </Grid>
    );
};
export default LandingPageView;