import React from 'react';
import './Transition.css';

const Transition = ({ setCurrentPage }) => {
  return (
    <div className="video-container">
        <h1> Hi my valentine :D</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wjQvOJuIBGw?autoplay=1&si=o67OVCo3RnEMMyKQ&start=5"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <button className="trans_back_button" onClick={() => setCurrentPage('all_date')}>
        <img src="/assets/arrow.png" alt="Close" />
      </button>
      <h1> Welcome home :DDD</h1>
      <button className="trans_next_button" onClick={() => setCurrentPage('home')}>
        <img src="/assets/arrow.png" alt="Close" />
      </button>
    </div>
  );
};

export default Transition;
