import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import style from './IdDetection.module.css';
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
        <div {...getRootProps()} className={`${style.imageUploadContainer} ${isDragActive ? style.active : ''}`}>
            <input {...getInputProps()} />
            <h3>{title}</h3>
            {isDragActive ? (
                <p>Drop the files here ...</p>
            ) : (
                <p>Drag n drop an image here, or click to select one</p>
            )}
        </div>
    );
};

const IdDetection = () => {
    const [frontImage, setFrontImage] = useState(null);
    // const [backImage, setBackImage] = useState(null);
    const [response, setResponse] = useState(null);

    const handleSubmit = async () => {
        console.log("handle Submit is clicked")
        const payload = {
            frontImage
            // backImage,
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
            if (!response || !response.data || !response.data.mrz) return [];
            return Object.entries(response.data.mrz).map(([key, value]) => ({ key, value }));
        },
        [response]
    );

    return (
        <div>
            <div className={style.mainIdSection}>
                <div className={style.app}>
                    <div className={style.mainUpload}>
                        <div className={style.container}>
                            <ImageUpload title="Front Side" onImageUpload={setFrontImage} />
                            {frontImage && <img src={frontImage} alt="Front" className={style.uploadedImage} />}
                        </div>
                        {/* <div className={style.container}>
                            <ImageUpload title="Back Side" onImageUpload={setBackImage} />
                            {backImage && <img src={backImage} alt="Back" className={style.uploadedImage} />}
                        </div> */}
                    </div>
                    <button className={style.scanButton} onClick={handleSubmit}>Scan</button>
                </div>
            </div>
            {response && response.data && response.data.mrz && (
                <div className={style.anotherSection}>
                    <ResponseTable data={tableData} />
                </div>
            )}
        </div>
    );
};

export default IdDetection;
