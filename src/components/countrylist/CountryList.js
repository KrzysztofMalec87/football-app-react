import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountryLink from './countrylink/CountryLink';
import FadeInTop from '../../common/animations/FadeInTop';
import fetchApi from '../../common/apiconnections';
import { ALLOWED_COUNTRIES } from '../../common/constants';
import { addCountries } from '../../actions';

class LeagueList extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    fetchApi(process.env.REACT_APP_API_URL_COUNTRIES).then(respond => {
      const { addCountries: addCountriesToState } = this.props;
      const filteredCountries = this.filterCountries(respond);

      addCountriesToState(filteredCountries);

      this.setState({ active: true });
    });
  }

  filterCountries = ({ api }) => {
    let { countries } = api;

    countries = countries.filter(value =>
      ALLOWED_COUNTRIES.includes(value.country)
    );

    return countries;
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
