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
    const [faceImage, setFaceImage] = useState(null);
    const [result, setResult] = useState(null);

    const handleScan = async () => {
        if (!faceImage) {
            alert("Please upload an image first.");
            return;
        }
        console.log("handle Submit is clicked");
        const payload = { faceImage };
        
        try {
            const res = await fetch('http://127.0.0.1:5000/face-detection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();
            const { result } = data.data; // Extract the result field from the response data
            setResult(result);
            console.log(result);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div>
            <div className={style.mainIdSection}>
                <div className={style.app}>
                    <div className={style.mainUpload}>
                        <div className={style.container}>
                            <ImageUpload title="Upload Image" onImageUpload={setFaceImage} />
                            {faceImage && <img src={faceImage} alt="Uploaded" className={style.uploadedImage} />}
                        </div>
                    </div>
                    <button className={style.scanButton} onClick={handleScan}>Scan</button>
                </div>
            </div>
            {result && (
                <div className={style.responseContainer}>
                    <h3>Scan Result:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default FaceDetection;
