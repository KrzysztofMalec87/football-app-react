import React from 'react';
import { Link } from 'react-router-dom';

const leagueLink = ({ leagueData }) => {
  const { league_id: id, name, type, logo } = leagueData;
  const leagueSlug = `/league/${id}`;

  return (
    <div className="col-lg-4 c-league-link">
      <Link className="c-league-link__link" to={leagueSlug}>
        <div className="c-league-link__item">
          <div className="c-league-link__img-container">
            {logo && (
              <img alt={name} className="c-league-link__img" src={logo} />
            )}
          </div>
        </div>
        <div className="c-league-link__item">
          <h3 className="c-league-link__name">{name}</h3>
        </div>
        <div className="c-league-link__item">
          <div className="c-league-link__type">League type: {type}</div>
        </div>
      </Link>
    </div>
  );
};

export default leagueLink;
