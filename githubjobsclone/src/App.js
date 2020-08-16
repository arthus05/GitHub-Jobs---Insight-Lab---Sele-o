import React from 'react';

import { Provider, useSelector } from 'react-redux';
import store from './Store';
import Router from './router';

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <Provider store={ store }>
            {console.log('MORTE')}
            {console.log(store)}
            {console.log('DESTRUIÇÃAO')}
            <Router />
        </Provider>
    );
}


export default App;