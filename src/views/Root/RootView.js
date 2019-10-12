import React from 'react';

import Ball from '../../components/ball/Ball';
import Player from '../../components/player/Player';
import LeagueList from '../../components/leaguelist/LeagueList';

const Root = () => (
  <>
    <LeagueList />
    <Player />
    <Ball />
  </>
);

export default Root;
