import  { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './Facedetection.module.css';

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
            if (data && data.data && data.data.result) {
                setResult(data.data.result);
            } else {
                throw new Error('Unexpected response data structure');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <>
        <div className={style.Detectiontitle}>
            <h2>Face Detection</h2>
        </div>
        <div className={style.recoSection}>
            <div className={style.facereco}>
                <div className={style.faceHero}>
                    <img src="face.gif" alt="face" />
                </div>
                <div className={style.app}>
                    <div className={style.container}>
                        <ImageUpload title="Upload Image" onImageUpload={setFaceImage} />
                        {faceImage && <img src={faceImage} alt="Front" className={style.uploadedImage} />}
                    </div>
                    <button onClick={handleScan} className={style.scanButton}>Scan</button>
                </div>
            </div>
            {result && (
                <div className={style.responseContainer}>
                    <h3>Scan Result:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
        </>
    );
};

export default FaceDetection;


