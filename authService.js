import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email, password) => {
  return await axios.post(${API_URL}/login, { email, password });
};

export const signup = async (name, email, password) => {
  return await axios.post(${API_URL}/signup, { name, email, password });
};