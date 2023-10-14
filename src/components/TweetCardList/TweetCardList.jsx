import { TweedCard } from 'components/TweedCard/TweetCard';
import { useEffect, useState } from 'react';
import { fetchUsers } from 'services';

export const TweedCardList = () => {
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
          <TweedCard
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
