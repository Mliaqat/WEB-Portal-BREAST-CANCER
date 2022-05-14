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
        description: desc
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
        else {
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
    const [checkimg, setcheckimg] = useState(true)
    const [reportdata, setReportdata] = useState("");


    const hanldeClick = (data) => {
        setShow(true);
        setReportdata(data);
    };
    const hideModal = () => {
        setShow(false);
    };



    const add = async () => {
        if (checkimg) {
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
        } else {
            toast.error("Please Add Valid Image", {
                theme: "dark",
            });
        }
    };


    // -------------upload Image--------------

    const filehandler = (e) => {
        setImage(e.target.files[0]);

        if (e.target.files.length !== 0) {
            setPreViewImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const onImgLoad = ({ target: img }) => {
        const { offsetHeight, offsetWidth } = img;
        console.log(offsetHeight, offsetWidth);
        if (offsetHeight == 460 && offsetWidth == 700) {
            setcheckimg(true)
        } else {
            setcheckimg(false)
        }
    };

    const clear = () => {
        setImage(null);
        setPreViewImage(null)
        setResult(null)
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
            <article>
                <p className="ms-3 mb-2"> Home&gt;Dashboard </p>
            </article>
            <article className="file">
                <label>
                    <h4 className="mb-3">Upload Only Histopathology Image:</h4>
                    <input type="file" onChange={filehandler} />
                </label>
                <button className="btn mx-3" onClick={() => add()}>
                    View Result
                </button>
            </article>

            <article className="viewresult">


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


                {result && (
                    <>
                        <article>
                            <h4 className="fw-bold">{result?.class}</h4>
                        </article>
                        <article className="d-flex flex-column">
                            <button
                                className="btn"
                                onClick={() => hanldeClick(result?.class)}
                            >
                                Add Report
                            </button>
                            <button
                                className="btn mt-2"
                                onClick={() => clear()}
                            >
                                Clear Result
                            </button>

                        </article>
                    </>
                )}

            </article>
            {previewimage && (
                <article className="text-center mt-2">
                    <img onLoad={onImgLoad} src={previewimage}></img>
                </article>
            )}
            {show && <Modal type={reportdata} userdata={data} handleClose={hideModal} />}
        </DoctorDashboardStyle>
    );
}

export default DoctorDashboard;
