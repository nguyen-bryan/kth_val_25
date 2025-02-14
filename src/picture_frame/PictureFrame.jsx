import React, { useState } from 'react';
import './PictureFrame.css';

const PictureFrame = ({ setCurrentPage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the modal with the selected image
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="picture-frame">
      <button className="pf_back_button" onClick={() => setCurrentPage('home')}>
        <img src="/kth_val_25/assets/arrow.png" alt="Close" />
      </button>

      <button
        className="photo photo-1"
        onClick={() => openImage('/kth_val_25/assets/pic_1.jpg')}
      />
      
      <button
        className="photo photo-2"
        onClick={() => openImage('/kth_val_25/assets/pic_2.jpg')}
      />

      <button
        className="photo photo-3"
        onClick={() => openImage('/kth_val_25/assets/pic_3.jpg')}
      />

      {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <img src={selectedImage} alt="Enlarged" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default PictureFrame;
