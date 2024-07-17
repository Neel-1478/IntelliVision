import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

const ImageUpload = ({ title, onImageUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div {...getRootProps()} className={`image-upload-container ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      <h3>{title}</h3>
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop an image here, or click to select one</p>
      )}
    </div>
  );
};

const App = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  return (
    <div className='mainContainer'>
      <div className="app">
        <div className="container">
          <ImageUpload title="Front Side" onImageUpload={setFrontImage} />
          {frontImage && <img src={frontImage} alt="Front" className="uploaded-image" />}
        </div>
        <div className="container">
          <ImageUpload title="Back Side" onImageUpload={setBackImage} />
          {backImage && <img src={backImage} alt="Back" className="uploaded-image" />}
        </div>
      </div>
      <button className="scan-button">Scan</button>
    </div>
  );
};

export default App;
