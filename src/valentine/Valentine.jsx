import React, { useState } from 'react';
import './Valentine.css';

const Valentine = ({ setCurrentPage }) => {
  const [noButtonStyle, setNoButtonStyle] = useState({ position: 'absolute', right: '40%', top: '60%' });
  const [yesButtonStyle, setYesButtonStyle] = useState({ position: 'absolute', left: '40%', top: '60%' });
  const [yesButtonScale, setYesButtonScale] = useState(1);

  const moveButton = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth * 0.8);
    const randomY = Math.floor(Math.random() * window.innerHeight * 0.8);
    setNoButtonStyle({ position: 'absolute', left: `${randomX}px`, top: `${randomY}px` });
    setYesButtonScale((prevScale) => prevScale + 0.5);
  };

  return (
    <div className="v_main">
      <h1>Will you be my valentine?</h1>
      <img className='pls' src='/src/assets/cat_flowers.png'></img>
        <button className='yes_button'
          onClick={() => setCurrentPage('val_yes')} 
          style={{ ...yesButtonStyle, transform: `scale(${yesButtonScale})`, transition: 'transform 0.2s' }}
        >
          Yes
        </button>
        <button className='no_button'
          style={noButtonStyle}
          onMouseEnter={moveButton}
        >
          No
        </button>
    </div>
  );
};

export default Valentine;
