import React from 'react';

import { Provider, useSelector } from 'react-redux';
import store from './Store';
import Router from './router';

// Components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <Provider store={ store }>
      <Router />
    </Provider>
  );
}