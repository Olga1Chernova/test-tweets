import React, { useState } from 'react';
import logo from '../../images/Logo.png';
import cardDesign from '../../images/card-design.png';
import css from './SingleTweet.module.css';

export const SingleTweet = ({ user }) => {
  const [isActive, setIsActive] = useState(false);
  const [followersCount, setFollowersCount] = useState(user.followers);

  const handleButtonClick = () => {
    setIsActive(!isActive);
    setFollowersCount(isActive ? followersCount - 1 : followersCount + 1);
  };

  return (
    <li>
      <div className={css.mainContainer}>
        <div className={css.cardContainer}>
          <img src={logo} alt="logo" className={css.logo} />
          <div>
            <img src={cardDesign} alt="design element" className={css.design} />
            <div className={css.line}></div>
            <img src={user.avatar} alt="user pic" className={css.user} />
            <p className={css.tweets}>{user.tweets} TWEETS</p>
            <p className={css.followers}>{followersCount} FOLLOWERS</p>
            <button
              type="button"
              className={isActive ? `${css.button} ${css.active}` : css.button}
              onClick={handleButtonClick}
            >
              {isActive ? 'FOLLOWING' : 'FOLLOW'}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
