import React, { useState, useEffect } from 'react';
import HomePage from './home_page/HomePage';
import LoveBoard from './love_board/LoveBoard';
import Valentine from './valentine/Valentine';
import ValYes from './valentine/ValYes';
import DateSelect from './date_select/DateSelect';
import AllDate from './date_select/AllDate';
import PlanBook from './plan_book/PlanBook';
import PictureFrame from './picture_frame/PictureFrame';
import Transition from './transition_page/Transition';
import Flower from './home_page/Flower';

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('valentine');


  // Delete these 2 functions to start from beginning
  /*
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);
  */


  return (
    <>
      {currentPage === 'valentine' && (
        <Valentine setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'val_yes' && (
        <ValYes setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'date_select' && (
        <DateSelect setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'all_date' && (
        <AllDate setCurrentPage={setCurrentPage}/>
        )}
      {currentPage === 'home' && (
        <HomePage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'love_board' && (
        <LoveBoard setCurrentPage={setCurrentPage}/>
        )}
      {currentPage === 'plan_book' && (
        <PlanBook setCurrentPage={setCurrentPage}/>
        )}
      {currentPage === 'picture_frame' && (
        <PictureFrame setCurrentPage={setCurrentPage}/>
        )}

        {currentPage === 'transition' && (
        <Transition setCurrentPage={setCurrentPage}/>
        )}

      {currentPage === 'flower' && (
        <Flower setCurrentPage={setCurrentPage}/>
        )}
    </>
  );
}

export default App;
