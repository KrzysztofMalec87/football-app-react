import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

import Placeholder from '../../../assets/images/placeholder.png';

const leagueLink = ({ leagueData }) => {
  const { league_id: id, name, type, logo, country, flag } = leagueData;
  const formatedSlug = slugify(`${country} ${name}_${id}`).toLowerCase();
  const leagueSlug = `/league/${formatedSlug}`;

  return (
    <div className="col-lg-4 c-league-link">
      <Link className="c-league-link__link" to={leagueSlug}>
        <div className="c-league-link__item">
          <div className="c-league-link__img-container">
            {logo ? (
              <img alt={name} className="c-league-link__img" src={logo} />
            ) : (
              <img
                alt={name}
                className="c-league-link__img"
                src={Placeholder}
              />
            )}
          </div>
        </div>
        <div className="c-league-link__item">
          <h3 className="c-league-link__name">{name}</h3>
        </div>
        <div className="c-league-link__item">
          <div className="c-league-link__conuntry">
            <img
              alt={country}
              className="c-league-link__country-img"
              src={flag}
            />
          </div>
          <div className="c-league-link__conuntry">{country}</div>
        </div>
        <div className="c-league-link__item">
          <div className="c-league-link__type">League type: {type}</div>
        </div>
      </Link>
    </div>
  );
};

export default leagueLink;
