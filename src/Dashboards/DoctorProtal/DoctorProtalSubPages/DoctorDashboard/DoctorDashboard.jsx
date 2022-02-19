import React, { useState, useEffect } from 'react';
import axios from 'axios'
import icon from "../../../../Asset/images/uploadimage.png"
import { DoctorDashboardStyle } from './DoctorDashboard.style';

function DoctorDashboard() {

    const [selectedFile, setSelectedFile] = useState();
    const [image, setImage] = useState();
    const [result, setResult] = useState();
    const [previewimage, setPreViewImage] = useState();
    console.log(image)

    const add = async () => {

        let formData = new FormData();
        formData.append("file", image);
        await axios({
            method: "post",
            url: "http://localhost:8000/predict",
            data: formData,
        }).then(response => {
            setResult(response.data)
        })
            .catch(error => {
                console.log(error.response)
            });

    };

    const filehandler = (e) => {
        setImage(e.target.files[0]);

        if (e.target.files.length !== 0) {
            setPreViewImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <DoctorDashboardStyle>
            {/* <div>

                <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
                <button onClick={() => add()}>check</button>

            </div> */}
            <label htmlFor="upload-photo" className="product-image-wrapper">
                <input type="file" id="upload-photo" onChange={filehandler} />

                {image ? (
                    <img className="preview-image" src={previewimage}></img>
                ) : (
                    <span className="icon">
                        <img src={icon} alt="img" />
                    </span>
                )}
            </label>
            <button className='btn' onClick={() => add()}>View Result</button>
            {result &&
                <>
                    <h2>Cancer Type = {result?.class}</h2>
                    <h2>Accuracy = {result?.confidence}</h2>
                </>
            }
        </DoctorDashboardStyle>
    )
}

export default DoctorDashboard;
