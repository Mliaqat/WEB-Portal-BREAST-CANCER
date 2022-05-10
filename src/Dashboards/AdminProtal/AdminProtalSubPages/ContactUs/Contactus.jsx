import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteIcon } from "../../../../Asset/Icon/Icon";
import { TableStyle } from "../../../CommnonStyle/Dashboard.style";

function Contactus() {
    const url = `${process.env.REACT_APP_BASE_URL}/contacts`
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getuser();
    }, []);
  
    const getuser = async () => {
      await axios.get(url).then((res) => {
        setData(res.data);
       
      });
    };
  
    const deleteuser=(id)=>{
   axios.delete(`${url}/${id}`).then((res)=>{
     console.log(res)
     getuser();
   }).catch((err)=>{
     console.log(err)
   })
    }
    return (
      <TableStyle>
        <h2 className="title">Manage Patient</h2>
        <hr className='mb-5'></hr>
  
        <table>
          <thead>
            <tr>
              <th scope="col">Sr#</th>
              <th scope="col">User Name</th>
              <th scope="col">Phone no</th>
              <th scope="col">Query</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.slice(0).reverse().map((data, index) => {
                return (
                  <tr key={index}>
                    <td data-label="Sr#">{index + 1}</td>
                    <td data-label="Patient ID">{data?.user_name}</td>
                    <td data-label="Name">{data?.phone_no}</td>
                    <td data-label="Date">{data?.discripition} </td>
                    <td data-label="Action">
                      <article className="action-buttons-wrapper">
                        <button
                          className="action-button"
                          onClick={()=>deleteuser(data?._id)}
  
                        >
                          <DeleteIcon />
                        </button>
                      </article>
                    </td>
                  </tr>
                )
              }
              )
            }
  
  
  
  
          </tbody>
        </table>
      </TableStyle>
    )
  }
  

export default Contactus;