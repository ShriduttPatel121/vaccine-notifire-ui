import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import UserDataForm from './UserDataForm';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));
const LandingPageView =  (props) =>{
    const classes = useStyles();
    return(
        <Grid className={classes.root} spacing={3} container direction="column">
            <Grid item xs={12} md={12} lg={12} xl={12}>
                <UserDataForm />
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
                <div>search results will be here</div>
            </Grid>
        </Grid>
    );
};
export default LandingPageView;