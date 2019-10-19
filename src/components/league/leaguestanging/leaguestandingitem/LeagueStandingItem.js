import React from 'react';

const LeagueStandingItem = ({ data, featured = false }) => {
  const {
    teamName,
    rank,
    points,
    logo,
    all: { win, draw, lose },
  } = data;
  const mainClass = featured
    ? 'c-standing-row c-standing-row--featured'
    : 'c-standing-row';

  return (
    <div className={mainClass}>
      <div className="c-standing-row__item c-standing-row__item--number">
        {rank}
      </div>
      <div className="c-standing-row__item c-standing-row__item--logo">
        {logo && (
          <img alt={teamName} className="c-standing-row__img" src={logo} />
        )}
      </div>
      <div className="c-standing-row__item c-standing-row__item--name">
        {teamName}
      </div>
      <div className="c-standing-row__item c-standing-row__item--number">
        {win}
      </div>
      <div className="c-standing-row__item c-standing-row__item--number">
        {draw}
      </div>
      <div className="c-standing-row__item c-standing-row__item--number">
        {lose}
      </div>
      <div className="c-standing-row__item c-standing-row__item--number">
        <b>{points}</b>
      </div>
    </div>
  );
};

export default LeagueStandingItem;
