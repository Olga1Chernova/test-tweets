import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import logo from '../../images/Logo.png';
import cardDesign from '../../images/card-design.png';
import css from './SingleTweet.module.css';

export const SingleTweet = ({ user }) => {
  const [isActive, setIsActive] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);

  useEffect(() => {
    const storedFollowersCount = localStorage.getItem(
      `followersCount-${user.id}`
    );
    if (storedFollowersCount) {
      const parsedFollowersCount = JSON.parse(storedFollowersCount);
      setFollowersCount(parsedFollowersCount);
    } else {
      setFollowersCount(user.followers);
    }
  }, [user.id, user.followers]);

  useEffect(() => {
    localStorage.setItem(
      `followersCount-${user.id}`,
      JSON.stringify(followersCount)
    );
  }, [user.id, followersCount]);

  useEffect(() => {
    const storedIsActive = localStorage.getItem(`isActive-${user.id}`);
    if (storedIsActive) {
      setIsActive(JSON.parse(storedIsActive));
    }
  }, [user.id]);

  useEffect(() => {
    localStorage.setItem(`isActive-${user.id}`, JSON.stringify(isActive));
  }, [user.id, isActive]);

  const handleButtonClick = () => {
    setIsActive(prevIsActive => !prevIsActive);
    setFollowersCount(prevCount => (isActive ? prevCount - 1 : prevCount + 1));
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

SingleTweet.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
