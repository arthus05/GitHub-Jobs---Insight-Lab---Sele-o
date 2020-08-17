import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import HIWPage from './pages/HIWPage/HIWPage';
import APIDocPage from './pages/APIDocPage/APIDocPage';

// Pages
import HomePage from './pages/HomePage/HomePage';
export default function Routes() {

    return(
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ HomePage } />
                    <Route path='/faq' exact component={ HIWPage } />
                    <Route path='/api' exact component={ APIDocPage }/>
                </Switch>
            </div>
        </Router>
    )
}