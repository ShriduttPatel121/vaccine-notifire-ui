import React from "react";
import {
  BrowserRouter as Router,
    Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
    Box,
    Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { LinkedIn, MailOutline } from '@material-ui/icons';

import "./Main.css";
import MainHeader from '../Shared/UIElements/MainHeader/MainHeader';
import LandingPageView from '../LandingPage/LandingPageView';

const useStyles = makeStyles((theme) => ({
    /* main: {
        display: 'flex',
        flexDirection: 'column'
    }, */
    footer: {
        backgroundColor: 'black', //#0a4e6b
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'auto',
        '@media(max-width: 720px)': {
            marginTop: '39.5%'
        },
        '@media(max-width: 720px) and (max-height: 600px)': {
            marginTop: '25%'
        }
    },
    btn: {
        '@media(max-width: 700px)': {
            fontSize: '10px',
            paddingLeft: 10,
            paddingRight: 10
        }
    }
}));
function Main(props) {
    const classes = useStyles();

    const contactUsHandler = () => {
        window.open('mailto:vaccinenotifier.info@gmail.com');
      }
    
      const linkedInRedirectHandler = (linkedInId) => {
        window.open(linkedInId);
      }

    const routes = (
        <Switch>
            <Route path="/home">
                <LandingPageView />
            </Route>
            <Redirect to="/home" />
        </Switch>
    );

    const router = (
        <Router>
            <MainHeader />
            <main className={classes.main}>
                {routes}
                <Box className={classes.footer}>
                <Box justifyContent="center" width="100%" padding="0.5rem 0" display="flex">
                    <Button onClick={contactUsHandler} variant="outlined" style={{color: 'white', border: '1px solid white'}} startIcon={<MailOutline />}>Contact us</Button>
                </Box>
                <Box width="100%" display="flex" justifyContent="space-evenly" padding="0.5rem 0">
                    <Button onClick={() => linkedInRedirectHandler('https://www.linkedin.com/in/shridutt-patel-623b6210b/')} className={classes.btn} variant="outlined" style={{color: 'white'}} startIcon={<LinkedIn />}>Shridutt Patel</Button>
                    <Button onClick={() => linkedInRedirectHandler('https://www.linkedin.com/in/khush-gandhi-a86b62211')} className={classes.btn} variant="outlined" style={{color: 'white'}} startIcon={<LinkedIn />}>Khush Gandhi</Button>
                    <Button onClick={() => linkedInRedirectHandler('https://www.linkedin.com/in/sagar-chauhan-586783109/')} className={classes.btn} variant="outlined" style={{color: 'white'}} startIcon={<LinkedIn />}>Sagar Chauhan</Button>
                </Box>
                </Box>
            </main>
            
        </Router>);
    return router;
}

export default Main;