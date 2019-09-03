import React from 'react';

import Ball from './components/ball/Ball';
import Header from './components/header/Header';
import Player from './components/player/Player';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';

const App = () => (
  <>
    <Header />
    <Form />
    <Player />
    <Ball />
    <Footer />
  </>
);

export default App;
