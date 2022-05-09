import React, { useState, useEffect } from "react";
import axios from "axios";
import { DoctorDashboardStyle } from "./DoctorDashboard.style";
import { CrossIcon } from "../../../../Asset/Icon/Icon";
import Select from 'react-select';
import { Modelstyle } from "../../../../style/commomStyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ handleClose, type, userdata }) => {
    const url = `${process.env.REACT_APP_BASE_URL}/reports/report`;

 

    const docName = sessionStorage.getItem("fname");
    const [selectedValue, setSelectedValue] = useState();
    const [desc, setdesc] = useState();
    console.log(selectedValue)
    const data = {
        doctor_name: docName,
        cnic: selectedValue,
        type_of_cancer: type, 
        description:desc       
    };


    const submit = async (e) => {
        e.preventDefault();      

        if (selectedValue) {
            try {
                const res = await axios.post(url, data);
                console.log(res);
                toast.success("Signup Successfully", {
                    theme: "dark",
                });
            } catch (error) {
                console.log(error);
                toast.error("Invalid credentials", {
                    theme: "dark",
                });
            }
        }
        else{
            toast.error("Please Select Cnic No", {
                        theme: "dark",
                    });
        }
    };



    const handleChange = e => {
        setSelectedValue(e.value);
    }

    return (
        <Modelstyle>
            <ToastContainer />
            <div className="modal display-block">
                <section className="modal-main">
                    <div className="container">
                        <p className="heading">Add Report</p>
                        <article className="cancel" onClick={handleClose}>
                            <CrossIcon />
                        </article>
                    </div>
                    <hr className="mb-3"></hr>
                    <DoctorDashboardStyle>
                        <article className="modelbody">
                            <h3 className="my-4">Enter Patient Id:</h3>


                            <Select
                                value={userdata.find(obj => obj.value === selectedValue)}
                                onChange={handleChange}
                                options={userdata.map((x, i) => { return { value: x.cnic, label: x.cnic } })}
                            />

                            {/* <input
                                type="number"
                                name="cnic"
                                onChange={(e) => handleInputChange(e)}
                            ></input> */}

                            <h3 className="my-4">Test Result:</h3>

                            <input
                                type="text"
                                value={type}
                                readOnly
                                name="type_of_cancer"
                               
                            ></input>

                            <h3 className="my-4">Add description:</h3>

                            <textarea
                                type="text"
                                row="5"
                                name="description"
                                onChange={(e) => setdesc(e.target.value)}
                            ></textarea>

                            <article className="d-flex justify-content-end my-4">
                                <label className="btn" onClick={(e) => submit(e)}>
                                    Add Report
                                </label>
                            </article>
                        </article>
                    </DoctorDashboardStyle>
                </section>
            </div>
        </Modelstyle>
    );
};

function DoctorDashboard() {

    const url = `${process.env.REACT_APP_BASE_URL}/users`;
    const [data, setData] = useState([]);
    const [image, setImage] = useState();
    const [result, setResult] = useState();
    const [previewimage, setPreViewImage] = useState();
    const [show, setShow] = useState(false);
    const [reportdata, setReportdata] = useState("");


    const hanldeClick = (data) => {
        setShow(true);
        setReportdata(data);
    };
    const hideModal = () => {
        setShow(false);
    };

    let confidence = 0;

    const add = async () => {
        let formData = new FormData();
        formData.append("file", image);
        await axios({
            method: "post",
            url: "http://localhost:5000/predict",
            data: formData,
        })
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
             
                toast.error("Please Try Letter Api Error", {
                    theme: "dark",
                  });

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




    useEffect(() => {
        getuser();
    }, []);

    const getuser = async () => {
        await axios.get(url).then((res) => {
            setData(res.data);
        });
    };

    return (
        <DoctorDashboardStyle>
               <ToastContainer />
            <article className="file">
                <label>
                    <h4 className="mb-3">Upload Only Histopathology Image:</h4>
                    <input type="file" onChange={filehandler} accept=".jpeg , .png" />
                </label>
                <button className="btn mx-3" onClick={() => add()}>
                    View Result
                </button>
            </article>

            <article className="viewresult">
                {previewimage && (
                    <article>
                        <h3>Uploded Image</h3>
                    </article>
                )}

                {result && (
                    <>
                        <article>
                            <h3>Algorithem Result</h3>
                        </article>
                        <article>
                            <h3>Report</h3>
                        </article>
                    </>
                )}

                {previewimage && (
                    <article>
                        <img className="preview-image" src={previewimage}></img>
                    </article>
                )}
                {result && (
                    <>
                        <article>
                            <h4>{result?.class}</h4>
                            <h4 className="my-3">{confidence}%</h4>
                        </article>
                        <article className="d-flex flex-column">
                            <button
                                className="btn"
                                onClick={() => hanldeClick(result?.class)}
                            >
                                Add Report
                            </button>
                        </article>
                    </>
                )}

            </article>
            {show && <Modal type={reportdata} userdata={data} handleClose={hideModal} />}
        </DoctorDashboardStyle>
    );
}

export default DoctorDashboard;
