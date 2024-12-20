import React, { useState } from 'react';
import { makePayment } from '../services/apiService';

const PaymentPage = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    const result = await makePayment(recipient, amount);
    if (result) {
      alert('Payment Successful');
    } else {
      alert('Payment Failed');
    }
  };

  return (
    <div>
      <h1>Make Payment</h1>
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default PaymentPage;
