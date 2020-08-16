import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';

// Pages
import HomePage from './pages/HomePage/HomePage';

// Reducers
import { useSelector, useDispatch } from 'react-redux';
import store from './Store';
import SearchBar from './components/SearchBar/SearchBar';

export default function Routes() {

    return(
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>
        </Router>
    )
}