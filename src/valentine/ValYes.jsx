import React from 'react';
import './Valentine.css';

const ValYes = ({ setCurrentPage }) => {
  return (
    <div className="v_yes">
      <h1> YAYYYYYYYY</h1>
      <div className="img_div">
        <img className='cat_gif' src='/kth_val_25/assets/happy_cat.gif'></img>
        <img className='poggers' src='/kth_val_25/assets/poggers.png'></img>
        <img className='gigachad' src='/kth_val_25/assets/gigachad.png'></img>
      </div>

      <h2>Me looking at a gigachad</h2>
      <button className='next_button'
          onClick={() => setCurrentPage('all_date')} 
          >
          Next
        </button>
    </div>
    
  );
};

export default ValYes;
