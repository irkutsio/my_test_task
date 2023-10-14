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



  return <div>Tweet</div>;
};
