import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCountries } from '../../actions';
import CountryLink from './countrylink/CountryLink';
import FadeInTop from '../../common/animations/FadeInTop';
import fetchApi from '../../common/apiconnections';

class LeagueList extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    fetchApi(process.env.REACT_APP_API_URL_COUNTRIES).then(res => {
      const { addCountries: addCountriesToState } = this.props;
      const filteredCountries = this.filterCountries(res);

      addCountriesToState(filteredCountries);

      this.setState({ active: true });
    });
  }

  filterCountries = ({ api }) => {
    const allowedCountries = [
      'Belgium',
      'England',
      'France',
      'Germany',
      'Poland',
      'Spain',
    ];
    const newCountryList = [];
    const { countries } = api;

    for (const iterator of countries) {
      const countryName = iterator.country;

      if (allowedCountries.includes(countryName)) {
        newCountryList.push(iterator);
      }
    }

    return newCountryList;
  };

  render() {
    const { countries } = this.props;
    const { active } = this.state;

    return (
      <FadeInTop
        animationDelay={400}
        className="container c-country-list"
        pose={active ? 'visible' : 'hidden'}
      >
        <div className="row c-league-list__row">
          {countries.map((singleCountry, index) => {
            const { country, flag } = singleCountry;
            const key = `countries-${index}`;

            return <CountryLink country={country} flag={flag} key={key} />;
          })}
        </div>
      </FadeInTop>
    );
  }
}

const mapDispathToProps = dispatch => ({
  addCountries: countries => dispatch(addCountries(countries)),
});

const mapStateToProps = ({ countries }) => ({ countries });

export default connect(
  mapStateToProps,
  mapDispathToProps
)(LeagueList);
