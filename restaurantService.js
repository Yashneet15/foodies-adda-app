import axios from 'axios';

const API_URL = 'http://localhost:5000/api/restaurants';

export const getRestaurants = async () => {
  return await axios.get(API_URL);
};