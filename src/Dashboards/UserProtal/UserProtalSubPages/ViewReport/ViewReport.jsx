import React from 'react';
import img from '../../../../Asset/images/download.png'
import { TableStyle } from '../../../CommnonStyle/Dashboard.style';

function ViewReport() {
    return (
        <TableStyle>
            <h2 className="title">View Report</h2>
            <hr className='mb-5'></hr>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Download</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td data-label="Patient ID">#123</td>
                        <td data-label="Name">Liaqat</td>
                        <td data-label="Date">03/01/2016 </td>
                        <td className='icon'>
                            <img  src={img} alt="download" />
                            <p>Download</p>
                        </td>

                    </tr>
                    <tr>
                        <td data-label="Patient ID">#123</td>
                        <td data-label="Name">Liaqat</td>
                        <td data-label="Date">03/01/2016 </td>

                        <td className='icon'>
                            <img  src={img} alt="download" />
                            <p>Download</p>
                        </td>

                    </tr>

                </tbody>
            </table>
        </TableStyle>
    );

}

export default ViewReport;
