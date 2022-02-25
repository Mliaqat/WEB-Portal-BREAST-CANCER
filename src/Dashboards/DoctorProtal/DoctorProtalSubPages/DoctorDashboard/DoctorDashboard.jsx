import React, { useState, useEffect } from 'react';
import axios from 'axios'
import icon from "../../../../Asset/images/uploadimage.png"
import { DoctorDashboardStyle } from './DoctorDashboard.style';

function DoctorDashboard() {

    const [selectedFile, setSelectedFile] = useState();
    const [image, setImage] = useState();
    const [result, setResult] = useState();
    const [previewimage, setPreViewImage] = useState();
    let confidence = 0;

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



    if (result) {
        confidence = (parseFloat(result?.confidence) * 100).toFixed(2);
    }


    const filehandler = (e) => {
        setImage(e.target.files[0]);

        if (e.target.files.length !== 0) {
            setPreViewImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <DoctorDashboardStyle>
            <article className="file">
                <label>
                    <h4 className='mb-3'>Upload Only Histopathology Image:</h4>
                    <input type="file" onChange={filehandler} />
                </label>
                <button className='btn mx-3' onClick={() => add()}>View Result</button>
            </article>

            <article className='viewresult'>
                {previewimage &&
                    <article><h3>Uploded Image</h3></article>
                }
                {result &&
                    <>
                        <article><h3>Algorithem Result</h3></article>
                        <article><h3>Report</h3></article>
                    </>
                }

                {previewimage &&
                    <article>
                        <img className="preview-image" src={previewimage}></img>
                    </article>
                }
                {result &&

                    <>
                        <article>
                            <h4>{result?.class}</h4>
                            <h4 className='my-3'>{confidence}%</h4>
                        </article>
                        <article>
                            <button className='btn'>Add Report</button>
                        </article>
                    </>

                }


            </article>
            {/* <label htmlFor="upload-photo" className="product-image-wrapper">
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
            } */}
        </DoctorDashboardStyle>
    )
}

export default DoctorDashboard;
