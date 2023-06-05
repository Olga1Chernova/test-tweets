import React, { useEffect, useState } from 'react';
import { getAllUsers } from 'shared/services/tweets-api';
import { SingleTweet } from 'components/SingleTweet/SingleTweet';

import css from './TweetList.module.css'

export const TweetsList = () => {
  const [users, setUsers] = useState([]);

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

    return (
      <>
        <ul className={css.mainContainer}>
          {users.map(user => (
            <SingleTweet key={user.id} user={user} />
          ))}
        </ul>
        <button>LOAD MORE</button>
      </>
    );
};
