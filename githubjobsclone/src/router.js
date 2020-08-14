import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

// Pages
import homePage from './pages/homePage/homePage';

// Reducers
import { useSelector, useDispatch } from 'react-redux';
import store from './Store';

export default function Routes() {
    const viewSite = useSelector( state => state.viewSide );

    return(
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={homePage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}