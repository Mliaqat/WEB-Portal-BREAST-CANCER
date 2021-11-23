import React, { useState } from "react";

import { AddCustomerStyle } from "./UserList.style";
import { DeleteIcon, EditIcon } from "../../../../../Asset/Icon/Icon";

function UserList() {


  return (
    <AddCustomerStyle>
      <article className="section-header">
        <h2 className="heading">Add Customer</h2>
        <button className="add-customer-button">
          Add Customer
        </button>


      </article>

      <table className="customer-table" width="100%">
        <thead>
          <tr>
            <td>Customer ID</td>
            <td>Avatar</td>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Phone-No</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#521</td>
            <td>
              <img
                src="/images/users-image/user-one.png"
                alt="User"
                className="user-avatar"
              />
            </td>

            <td>Jahangir Khan</td>
            <td>jahangirjay5@gmail.com</td>
            <td>12345</td>
            <td>+9230312345</td>
            <td>15-02-2021</td>
            <td>
              <button className="edit-button">
                <EditIcon />
              </button>
              <button className="delete-button">
                <DeleteIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </AddCustomerStyle>
  );
}

export default UserList;
