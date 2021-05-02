import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Route } from 'react-router-dom';

import UserDataForm from './UserDataForm';
import AvailableSlots from './AvailableSlots';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3)
    },
    slotGrid: {
        marginTop: theme.spacing(3)
    }
}));
const LandingPageView =  (props) =>{
    const classes = useStyles();
    return(
        <Grid style={{width: '100%'}} className={classes.root} container direction="column">
            <Grid item xs={12} md={12} lg={12} xl={12}>
                <UserDataForm />
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12} className={classes.slotGrid}>
                <Route path="/nextAvailableSlots" component={AvailableSlots} />
            </Grid>
        </Grid>
    );
};
export default LandingPageView;