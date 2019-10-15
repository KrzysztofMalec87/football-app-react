import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({ country, flag }) => {
  const countrySlug = `/country/${country.toLowerCase()}`;

  return (
    <div className="col-lg-4 c-country-link">
      <Link className="c-country-link__link" to={countrySlug}>
        <img alt={country} className="c-country-link__img" src={flag} />
        <h3 className="c-country-link__name">{country}</h3>
      </Link>
    </div>
  );
};

export default CountryLink;
