import React from "react";
import {
  BrowserRouter as Router,
    Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./Main.css";
import MainHeader from '../Shared/UIElements/MainHeader/MainHeader';
import LandingPageView from '../LandingPage/LandingPageView';
function Main(props) {

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
            <main>
                {routes}
            </main>
        </Router>);
    return router;
}

export default Main;