import React from 'react';
import { DeleteIcon, EditIcon } from '../../../../Asset/Icon/Icon';
import { TableStyle } from '../../../CommnonStyle/Dashboard.style';

function ManageDoctor() {
    return (
        <TableStyle>
            <article className='btn_wrapper '>
                <h2 className="title">Manage Doctor</h2>
                <button className='btn'>Add Doctor</button>

            </article>
            <hr className='mb-5'></hr>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Doctor ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td data-label="Patient ID">#123</td>
                        <td data-label="Name">Liaqat</td>
                        <td data-label="Date">03/01/2016 </td>
                        <td data-label="Status">
                            <span className="pending">Unblock</span>
                        </td>

                        <td data-label="Action">
                            <article className="action-buttons-wrapper">
                                <button className="action-button">
                                    <EditIcon />
                                </button>
                                <button
                                    className="action-button"

                                >
                                    <DeleteIcon />
                                </button>
                            </article>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Patient ID">#123</td>
                        <td data-label="Name">Liaqat</td>
                        <td data-label="Date">03/01/2016 </td>
                        <td data-label="Status">
                            <span className="pending">Unblock</span>
                        </td>

                        <td data-label="Action">
                            <article className="action-buttons-wrapper">
                                <button className="action-button">
                                    <EditIcon />
                                </button>
                                <button
                                    className="action-button"

                                >
                                    <DeleteIcon />
                                </button>
                            </article>
                        </td>
                    </tr>

                </tbody>
            </table>
        </TableStyle>
    )
}

export default ManageDoctor;