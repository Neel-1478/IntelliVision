import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './IdDetection.module.css';

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
        <div {...getRootProps()} className={`${style.imageUploadContainer} ${isDragActive ? style.active : ''}`}>
            <input {...getInputProps()} />
            <h3>{title}</h3>
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag & drop an image here, or click to select one</p>
            )}
        </div>
    );
};

const FaceDetection = () => {
    const [image, setImage] = useState(null);

    const handleScan = () => {
        if (image) {
            // Placeholder for scan functionality
            console.log('Scanning image...');
            // You can replace the above line with your scanning logic
        }
    };

    return (
        <div className={style.faceDetection}>
            <div className={style.faceHero}>
                <img src="hero.png" alt="hero" height="550px" width="800px" />
            </div>
            <div className={style.app}>
                <div className={style.container}>
                    <ImageUpload title="Upload Image" onImageUpload={setImage} />
                    {image && <img src={image} alt="Front" className={style.uploadedImage} />}
                </div>
                <button onClick={handleScan} className={style.scanButton}>Scan</button>
            </div>
        </div>
    );
};

export default FaceDetection;
