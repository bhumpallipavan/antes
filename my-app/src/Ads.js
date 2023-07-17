import React, { useState, useRef } from 'react';
import './Ads.css';

const Ads = () => {
  const [videoURL, setVideoURL] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isVideoUploaded, setIsVideoUploaded] = useState(false);
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoURL(url);
    setIsVideoUploaded(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageURL(url);
    setIsImageUploaded(true);
  };


  return (
    <div className="ads-container">
      <div className="ads-item">
        <h2>Video Ad</h2>
        {isVideoUploaded ? (
          <video width="400" height="300" controls>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <label className="placeholder">
            Upload a video
            <input
              ref={videoInputRef}
              type="file"
              accept="video/mp4"
              onChange={handleVideoChange}
              style={{ display: 'none' }}
            />
          </label>
        )}
      </div>
      <div className="ads-item">
        <h2>Image Ad</h2>
        {isImageUploaded ? (
          <img src={imageURL} alt="Ad" width="400" height="300" />
        ) : (
          <label className="placeholder">
            Upload an image
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </label>
        )}
      </div>
      {(isImageUploaded || isVideoUploaded) && (
        <div className="submit-button">
          <button>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Ads;
