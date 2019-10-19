import React from 'react';

import Ball from '../../components/ball/Ball';
import Player from '../../components/player/Player';
import CountryList from '../../components/countrylist/CountryList';

const Root = () => (
  <>
    <CountryList />
    <Player />
    <Ball />
  </>
);

export default Root;
