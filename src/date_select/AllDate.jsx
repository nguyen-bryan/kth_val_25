import React, { useState, useEffect } from "react";
import itemsData from "./DateList.json";
import './AllDate.css';

const DateSelectAll = ({ setCurrentPage }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const handleChoice = (chosenItem) => {
    setSelectedItem(chosenItem);
  };

  return (
    
    <div className="game-container">
        <h1 className='date_title'> Date Selector </h1>
        <h4> Too many options? Press the button to narrow it one by one </h4>
        <button className='next_button'
          onClick={() => setCurrentPage('date_select')} 
          >
          Narrower
        </button>
      {selectedItem ? (
        <div className="winner-container">
          <h1>Winner: {selectedItem.word}!</h1>
          <img src={selectedItem.image} alt={selectedItem.word} className="winner-image" />
          <h3> Please send a picture of this to Bryan. He didn't set up a way to actually receieve what you chose.</h3>
          <button className='next_button'
            onClick={() => setSelectedItem(null)} 
            >
            Back
        </button>
        </div>
      ) : (
        <div>
          <div className="choice-grid">
            {items.map((item) => (
              <button
                key={item.word}
                className="choice-card"
                onClick={() => handleChoice(item)}
              >
                <img src={item.image} alt={item.word} className="choice-image" />
                <p>{item.word}</p>
              </button>
            ))}

          </div>
          <button className='next_button'
            onClick={() => setCurrentPage('love_board')} 
            >
            Next
          </button>
          <button className='back_button'
            onClick={() => setCurrentPage('val_yes')} 
            >
            Back
          </button>
      </div>
      )}
      
    </div>
  );
};

export default DateSelectAll;
