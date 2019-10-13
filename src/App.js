import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RootView from './views/Root/RootView';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Header />
        <Route component={RootView} exact path="/" />
        <Footer />
      </>
    </BrowserRouter>
  </Provider>
);

export default App;
