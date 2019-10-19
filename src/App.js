import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import RootView from './views/root/RootView';
import CountryView from './views/country/CountryView';
import LeagueView from './views/league/LeagueView';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Header />
        <Route component={RootView} exact path="/" />
        <Route component={CountryView} exact path="/country/:id" />
        <Route component={LeagueView} exact path="/league/:id" />
        <Footer />
      </>
    </BrowserRouter>
  </Provider>
);

export default App;
