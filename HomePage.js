import React from 'react';
import './HomePage.css'; // Make sure to import the CSS for styling

import { Link } from 'react-router-dom';
import './HomePage.css'; // Importing the CSS file for HomePage styling

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome to Paytm Clone</h1>
        <p>Your one-stop solution for digital payments</p>
      </div>
      <div className="button-container">
        <Link to="/wallet">
          <button className="home-button">Go to Wallet</button>
        </Link>
        <Link to="/payment">
          <button className="home-button">Make Payment</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
