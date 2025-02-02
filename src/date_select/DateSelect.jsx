import React, { useState, useEffect } from "react";
import itemsData from "./DateList.json";
import './DateSelect.css'

const DateSelect = ({ setCurrentPage }) => {
  const [items, setItems] = useState([]);
  const [currentPair, setCurrentPair] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  useEffect(() => {
    if (items.length > 1) {
      setCurrentPair([items[0], items[1]]);
    } else if (items.length === 1) {
      setWinner(items[0]);
    }
  }, [items]);

  const handleChoice = (chosenItem, event) => {
    event.target.blur(); // Removes focus from the clicked button
    setItems((prevItems) => [chosenItem, ...prevItems.slice(2)]);
  };

  return (
    <div className='game_container'>
      <h1> Which one would you rather do?</h1>
      {winner ? (
        <div className="winner-container">
          <h1>Winner: {winner.word}!</h1>
          <img src={winner.image} alt={winner.word} className="winner-image" />
          <h3> Please send a picture of this to Bryan. He didn't set up a way to actually receieve what you chose.</h3>
          <button className='next_button'
            onClick={() => setCurrentPage('all_date')} 
            >
            Back
          </button>
        </div>
      ) : (
        <div>
          {currentPair.map((item) => (
            <button
            key={item.word}
            className="choice_container"
            onClick={(event) => handleChoice(item, event)}
          >
          
              <img src={item.image} alt={item.word} className='choice_img' />
              <p>{item.word}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateSelect;