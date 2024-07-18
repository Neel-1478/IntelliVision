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
                <p>Drag 'n' drop an image here, or click to select one</p>
            )}
        </div>
    );
};

const IdDetection = () => {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);

    return (
        <div>
            <div className={style.app}>
                <div className={style.container}>
                    <ImageUpload title="Front Side" onImageUpload={setFrontImage} />
                    {frontImage && <img src={frontImage} alt="Front" className={style.uploadedImage} />}
                </div>
                <div className={style.container}>
                    <ImageUpload title="Back Side" onImageUpload={setBackImage} />
                    {backImage && <img src={backImage} alt="Back" className={style.uploadedImage} />}
                </div>
            </div>
            <button className={style.scanButton}>Scan</button>
        </div>
    );
};

export default IdDetection;