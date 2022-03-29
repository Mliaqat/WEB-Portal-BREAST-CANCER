import React, { useState, useEffect } from 'react';
import axios from 'axios'
import icon from "../../../../Asset/images/uploadimage.png"
import { DoctorDashboardStyle } from './DoctorDashboard.style';
import { CrossIcon } from '../../../../Asset/Icon/Icon';
import { Modelstyle } from '../../../../style/commomStyle';


const Modal = ({ handleClose, data }) => {


    return (
        <Modelstyle>
            <div className="modal display-block">
                <section className="modal-main">

                    <div className="container">
                        <p className="heading">Add Report</p>
                        <article className="cancel" onClick={handleClose}><CrossIcon /></article>
                    </div>
                    <hr className="mb-3"></hr>
                    <DoctorDashboardStyle>

                        <article className="modelbody">

                            <h3 className='my-4'>Enter Patient Id:</h3>

                            <input type="email"></input>

                            <h3 className='my-4'>Test Result:</h3>

                            <input type="text" value={data} readOnly></input>

                            <h3 className='my-4'>Add description:</h3>

                            <textarea type="text" row="5"></textarea>



                            <article className="d-flex justify-content-end my-4">
                                <label className="btn">Add Report</label>
                            </article>


                        </article>

                    </DoctorDashboardStyle>




                </section>
            </div>
        </Modelstyle >
    );
};



function DoctorDashboard() {

    const [selectedFile, setSelectedFile] = useState();
    const [image, setImage] = useState();
    const [result, setResult] = useState();
    const [previewimage, setPreViewImage] = useState();

    const [show, setShow] = useState(false);
    const [reportdata, setReportdata] = useState("")


    const hanldeClick = (data) => {
        setShow(true);
        setReportdata(data)
    };
    const hideModal = () => {
        setShow(false);
    };



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
                    <input type="file" onChange={filehandler} accept=".jpeg , .png" />
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
                        <article className='d-flex flex-column'>
                            <button className='btn' onClick={() => hanldeClick(result?.class)}>Add Report</button>


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
            {show && <Modal data={reportdata} handleClose={hideModal} />}
        </DoctorDashboardStyle>
    )
}

export default DoctorDashboard;
