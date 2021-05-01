import React from 'react';
import { Grid } from '@material-ui/core';
import UserDataForm from './UserDataForm';
const LandingPageView =  (props) =>{
    return(
        <Grid container direction="column">
            <Grid item xs={12} md={9} lg={9} xl={6}>
                <UserDataForm />
            </Grid>
            <Grid item xs={12} md={9} lg={9} xl={9}>
                <div>search results will be here</div>
            </Grid>
        </Grid>
    );
};
export default LandingPageView;