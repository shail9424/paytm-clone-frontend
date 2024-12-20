import React, { useEffect, useState } from 'react';
import { getBalance } from '../services/apiService';

const WalletPage = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const data = await getBalance();
      setBalance(data);
    };
    fetchBalance();
  }, []);

  return (
    <div>
      <h1>Your Wallet Balance</h1>
      <p>₹ {balance}</p>
    </div>
  );
};

export default WalletPage;
