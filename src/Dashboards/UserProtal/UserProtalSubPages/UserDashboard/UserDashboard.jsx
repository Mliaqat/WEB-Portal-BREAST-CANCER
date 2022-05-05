import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img from '../../../../Asset/images/download.png'
import { PDFDownloadLink} from '@react-pdf/renderer';
import { TableStyle } from '../../../CommnonStyle/Dashboard.style';
import PdfDocument from '../../../../Component/PdfReport/Report';

function UserDashboard() {

    const url = `${process.env.REACT_APP_BASE_URL}/reports`;
    const [data, setData] = useState([])

    useEffect(() => {
        getreports()
    }, [])

    const getreports = async () => {

        await axios.get(url).then((res) => {

            setData(res.data);

        })
    }






    return (
        <TableStyle>
            <h2 className="title">View Report</h2>
            <hr className='mb-5'></hr>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Report Date</th>
                        <th scope="col">Result</th>
                        <th scope="col">Download</th>
                    </tr>
                </thead>
                <tbody>

{
    data && data.map((data,index)=>{
        return(
            <tr>
                        <td data-label="Patient ID">{data?.cnic}</td>
                        <td data-label="Date">03/01/2016 </td>
                        <td data-label="Result">{data?.type_of_cancer}</td>

                        {/* <td className='icon'>
                            <img  src={img} alt="download" />
                            <p>Download</p>
                        </td> */}
                        <td>
                            <div className='download-link'>
                                <PDFDownloadLink
                                    document={<PdfDocument data={data} />}
                                    //   document={<PdfDocument invoicedata={InvoiceData} />}
                                    fileName="report"
                                >
                                    {({ blob, url, loading, error }) =>
                                        loading ? "Loading..." : "Download Invoice"
                                    }
                                </PDFDownloadLink>
                            </div>
                        </td>


                    </tr>
        )
    })
}



                  

                </tbody>
            </table>
        </TableStyle>
    );
}

export default UserDashboard;
