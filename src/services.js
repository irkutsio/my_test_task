import axios from 'axios';

axios.defaults.baseURL = 'https://64aeb346c85640541d4d8f6c.mockapi.io';

export const fetchUsers = async () => {
  try {
    const responce = await axios.get('/users');
    return responce.data;
  } catch (error) {
    throw error;
  }
};