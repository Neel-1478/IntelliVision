import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './IdDetections.module.css';
import ResponseTable from '../Components/ResponseTable';

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
        <div {...getRootProps()} className={`${style.imageUploadContainer} ${isDragActive ? style.active : ''} ${!title ? style.empty : ''}`}>
            <input {...getInputProps()} />
            {title && <h3>{title}</h3>}
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
    const [response, setResponse] = useState(null);

    const handleSubmit = async () => {
        console.log("handle Submit is clicked");
        const payload = {
            frontImage
        };

        const res = await fetch('http://127.0.0.1:5000/process-images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        setResponse(data);
        console.log(data);
    };

    const tableData = React.useMemo(
        () => {
            if (!response || !response.data) return [];
            if (response.data.mrz) {
                return Object.entries(response.data.mrz).map(([key, value]) => ({ key, value }));
            } else if (response.data.ocr) {
                return Object.entries(response.data.ocr).map(([key, value]) => ({ key, value }));
            }
            return [];
        },
        [response]
    );

    return (
        <>
        <div className={style.Detectiontitle}>
            <h2>Id-Detection</h2>
        </div>
        <div className={style.IdDetectionsection}>
            <div className={style.mainIdSection}>

                <div className={style.app}>
                    <div className={style.mainUpload}>
                        <div className={style.container}>
                            {frontImage && <img src={frontImage} alt="Front" className={style.uploadedImage} />}
                            <ImageUpload title={frontImage ? null : "Front Side"} onImageUpload={setFrontImage} />
                        </div>
                    </div>
                    <button className={style.scanButton} onClick={handleSubmit}>Scan</button>
                </div>
            </div>
            {response && response.data && (response.data.mrz || response.data.ocr) && (
                <div className={style.anotherSection}>
                    <ResponseTable data={tableData} />
                </div>
            )}
        </div>
        </>
    );
};

export default IdDetection;
