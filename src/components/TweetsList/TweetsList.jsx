import React, { useEffect, useState } from 'react';
import { getAllUsers } from 'shared/services/tweets-api';
import { SingleTweet } from 'components/SingleTweet/SingleTweet';

import css from './TweetList.module.css';

export const TweetsList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const totalUsers = users.length;
  const lastPage = Math.ceil(totalUsers / usersPerPage);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const showLoadMoreButton = currentPage < lastPage;

  const visibleUsers = users.slice(0, currentPage * usersPerPage);

  return (
    <>
      <ul className={css.mainContainer}>
        {visibleUsers.map(user => (
          <SingleTweet key={user.id} user={user} />
        ))}
      </ul>
      {showLoadMoreButton && (
        <button onClick={handleLoadMore}>LOAD MORE</button>
      )}
    </>
  );
};

