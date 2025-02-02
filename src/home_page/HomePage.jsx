import React from 'react';
import './HomePage.css';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="love">
      <h1>HomePage</h1>
      <button onClick={() => setCurrentPage('about')}>
        Go to About Page
      </button>
    </div>
  );
};

export default HomePage;
