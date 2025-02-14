import React, { useState, useEffect } from "react";
import "./PlanBook.css";
import bookData from "./bookData.json"; // JSON containing page lists

import arrowLeft from "/assets/arrow.png";
import arrowRight from "/assets/arrow.png";

const PlanBook = ({ setCurrentPage }) => {
  const [bookPage, setBookPage] = useState(0); // Renamed from currentPage
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(bookData); // Load JSON data
  }, []);

  const nextPage = () => {
    if (bookPage + 2 < pages.length) {
      setBookPage((prev) => prev + 2);
    }
  };

  const prevPage = () => {
    if (bookPage - 2 >= 0) {
      setBookPage((prev) => prev - 2);
    }
  };

  return (
    <div className="table">
      <div className="book">
        <button className="pb_back_button" onClick={() => setCurrentPage("home")}>
          <img src={arrowLeft} alt="Back" />
        </button>
        <div className="pages">
          <div className="left_page">
            <h2>{pages[bookPage]?.[0]}</h2> {/* Display first item as title */}
            <ul>
              {pages[bookPage]?.slice(1).map((item, index) => ( // Skip the first item for list
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right_page">
          {bookPage + 1 < pages.length && (
            <>
              <h2>{pages[bookPage + 1]?.[0]}</h2> {/* Display first item as title for next page */}
              <ul>
                {pages[bookPage + 1]?.slice(1).map((item, index) => ( // Skip first item for list
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        
      </div>
      <div className="nav-buttons">
          <button className="prev-button" onClick={prevPage} disabled={bookPage === 0}>
            <img src={arrowLeft} alt="Previous" />
          </button>
          <button className="next-button" onClick={nextPage} disabled={bookPage + 2 >= pages.length}>
            <img src={arrowRight} alt="Next" />
          </button>
        </div>
    </div>
  );
};

export default PlanBook;
