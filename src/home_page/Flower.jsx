import React from 'react';
import './HomePage.css';

const Flower = ({ setCurrentPage }) => {
  return (
    <div className="flower">
        <h1> It's just flowers...</h1>
      <button className="flower_back_button" onClick={() => setCurrentPage('home')}>
        <img src="/kth_val_25/src/assets/arrow.png" alt="Close" />
      </button>
    </div>
  );
};

export default Flower;
