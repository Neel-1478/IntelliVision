import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './Facereco.module.css';

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

const IdDetection = () => {
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        console.log("handleSubmit is clicked");
        const payload = {
            frontImage,
            backImage
        };

        try {
            const res = await fetch('http://127.0.0.1:5000/face-reco', {
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
            setResult(data);
            console.log('Response Data:', data); // Debugging log
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const renderTableData = () => {
        if (!result || !result.data) return null;

        return Object.keys(result.data).map((key) => (
            <tr key={key}>
                <td>{key}</td>
                <td>{JSON.stringify(result.data[key])}</td>
            </tr>
        ));
    };

    return (
        <div>
            <div className={style.Detectiontitle}>
                <h2>Face Recognition</h2>
            </div>
            <div className={style.mainIdSection}>
                <div className={style.app}>
                    <div className={style.mainUpload}>
                        <div className={style.container}>
                            {frontImage && <img src={frontImage} alt="Front" className={style.uploadedImage} />}
                            <ImageUpload title="First Image" onImageUpload={setFrontImage} />
                        </div>
                        <div className={style.container}>
                            {backImage && <img src={backImage} alt="Back" className={style.uploadedImage} />}
                            <ImageUpload title="Second Image" onImageUpload={setBackImage} />
                        </div>
                    </div>
                    <button className={style.scanButton} onClick={handleSubmit}>Scan</button>
                </div>
            </div>
            {result && (
                <div className={style.resultSection}>
                    <h3>Scan Result:</h3>
                    <table className={style.resultTable}>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default IdDetection;
