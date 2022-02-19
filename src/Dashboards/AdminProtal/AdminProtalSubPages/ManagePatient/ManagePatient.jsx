import React from 'react';
import { DeleteIcon, EditIcon } from '../../../../Asset/Icon/Icon';
import { TableStyle } from '../../../CommnonStyle/Dashboard.style';

function ManagePatient() {
  return (
    <TableStyle>
      <h2 className="title">Manage Patient</h2>
      <hr className='mb-5'></hr>

      <table>
        <thead>
          <tr>
            <th scope="col">Patient ID</th>
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

export default ManagePatient;
