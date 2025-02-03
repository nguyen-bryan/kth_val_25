import React, { useState, useEffect } from 'react';
import './LoveBoard.css';
import lovelist from './lovelist.json';
import bulletin_board from '/src/assets/bulletin_board.png'
import stickynote1 from '/src/assets/sticky_1.png';
import stickynote2 from '/src/assets/sticky_2.png';
import stickynote3 from '/src/assets/sticky_3.png';

const LoveBoard = ({ setCurrentPage }) => {
  const [notes, setNotes] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [clickedNote, setClickedNote] = useState(null);

  useEffect(() => {
    const noteList = Object.entries(lovelist); // Convert object to array of [key, value] pairs
    setNotes(noteList);
  }, []);

  const handleNoteClick = (index) => {
    setClickedNote(notes[index]); // Store the clicked note (tuple)
    setPopupVisible(true); // Show the popup
  };

  const closePopup = () => {
    setPopupVisible(false); // Hide the popup
    setClickedNote(null); // Clear the clicked note
  };

  const getStickyNoteImage = (imageName) => {
    switch (imageName) {
      case 'sticky_1':
        return stickynote1;
      case 'sticky_2':
        return stickynote2;
      case 'sticky_3':
        return stickynote3;
      default:
        return stickynote1; // Default fallback image
    }
  };

  const renderNote = ([key, value], index) => {
    const stickyImage = getStickyNoteImage(value.image); // Get the image for this sticky note

    return (
      <div
        key={index}
        className="note-container"
        onClick={() => handleNoteClick(index)}
      >
        <div
          className="sticky_note"
          style={{
            backgroundImage: `url(${stickyImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="sticky-note-header">
            <p>{key}</p> {/* Display the number (key) at the top of the sticky note */}
          </div>
        </div>
      </div>
    );
  };

  const renderGrid = () => {
    return (
      <div className="grid">
        {notes.map((note, index) => renderNote(note, index))}
      </div>
    );
  };

 

  return (
    <div>
      <img src='/kth_val_25/assets/dancing_cat.gif'></img>
      <h1> This part is still a work in progress :D</h1>
      <h2> Come back Febuary 14th for some more (hopefully I finish)</h2>
      <button className='next_button'
            onClick={() => setCurrentPage('all_date')} 
            >
            Back
          </button>
    
    </div>
    /*
    <div className="love">
      <button onClick={() => setCurrentPage('home')}>Go to Home Page</button>
      {popupVisible && clickedNote && (
        <div>
          <div className="popup-background"></div>
          <div className="popup-wrapper">
            <div
              className="popup"
              style={{
                backgroundImage: `url(${getStickyNoteImage(clickedNote[1].image)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="popup-content">
                <p>{clickedNote[1].text}</p> {}
                <button className="close-button" onClick={closePopup}>
                  <img src="/src/assets/arrow.png" alt="Close" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {renderGrid()}
    </div>
    */
  );
};

export default LoveBoard;
