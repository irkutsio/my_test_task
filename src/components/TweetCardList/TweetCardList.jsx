import { TweetCard } from 'components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import { fetchUsers } from 'services';

export const TweetCardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersData();
  }, []);

  const usersData = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(users);

  return (
    <div>
      <ul>
        {users.map(({ avatar, user, tweets, followers, id }) => (
          <TweetCard
            key={id}
            userImg={avatar}
            userName={user}
            tweetsQuantity={tweets}
            followersQuantity={followers}
          />
        ))}
      </ul>
    </div>
  );
};
