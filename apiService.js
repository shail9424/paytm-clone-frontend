import axios from 'axios';


const API_URL = 'http://localhost:5000/api';  // Change this to your actual backend URL

// Fetch balance
export const getBalance = async () => {
  try {
    const response = await axios.get(`${API_URL}/wallet/balance`);
    return response.data.balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
    return 0;
  }
};

// Make payment
export const makePayment = async (recipient, amount) => {
  try {
    const response = await axios.post(`${API_URL}/payment`, { recipient, amount });
    return response.data;
  } catch (error) {
    console.error('Error making payment:', error);
    return null;
  }
};
