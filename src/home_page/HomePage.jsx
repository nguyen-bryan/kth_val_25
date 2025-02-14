import React from 'react';
import './HomePage.css';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home">
      <button className="hp_back_button" onClick={() => setCurrentPage('transition')}>
        <img src="/assets/arrow.png" alt="Close" />
      </button>
      <button className="pb_button" onClick={() => setCurrentPage('plan_book')} />
      <button className="lb_button" onClick={() => setCurrentPage('love_board')} />
      <button className="pic_button" onClick={() => setCurrentPage('picture_frame')} />
      <button className="flower_button" onClick={() => setCurrentPage('flower')} />
    </div>
  );
};

export default HomePage;
