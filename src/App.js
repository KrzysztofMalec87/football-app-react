import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RootView from './views/Root/RootView';

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Route component={RootView} exact path="/" />
      <Footer />
    </>
  </BrowserRouter>
);

export default App;
