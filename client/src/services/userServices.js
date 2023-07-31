import axios from 'axios';

const baseUrl = 'mongodb://localhost/traveler-db';

export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data: ', error);
    throw error;
  }
};

