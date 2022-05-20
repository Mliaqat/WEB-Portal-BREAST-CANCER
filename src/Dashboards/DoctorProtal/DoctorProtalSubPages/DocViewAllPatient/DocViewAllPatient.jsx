import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { TableStyle } from '../../../CommnonStyle/Dashboard.style';
import PdfDocument from "../../../../Component/PdfReport/Report";
import Select from 'react-select';

function DocViewAllPatient() {
  const url = `${process.env.REACT_APP_BASE_URL}/reports`;
  const [data, setData] = useState([]);
  const [datacnic, setDatacnic] = useState([]);
  const [filterdata, setfilterdata] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    getreports();
  }, []);

  const getreports = async () => {
    await axios.get(url).then((res) => {
      setData(res.data);
      setfilterdata(res.data);
      setDatacnic(res.data);
    });
  };
  const handleChange = e => {
    setSelectedValue(e.value);
  }

  const search = () => {

    setfilterdata(data.filter(data => data.cnic == selectedValue))
  }

  return (
    <TableStyle>
      <h2 className="title">View Report</h2>
      <hr className="mb-5"></hr>

      <div className="search">
        <div>
          <p>Enter Patient CNIC:</p>
          <Select
            classsName="select"
            value={datacnic.find(obj => obj.value === selectedValue)}
            onChange={handleChange}
            options={datacnic.map((x, i) => { return { value: x.cnic, label: x.cnic } })}
          />
        </div>
        <button className="b" onClick={search}>
          Search
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">Patient ID</th>
            <th scope="col">Report Date</th>
            <th scope="col">Result</th>
            <th scope="col">Description</th>
            <th scope="col">Download</th>
          </tr>
        </thead>
        <tbody>
          {filterdata &&
            filterdata.map((data, index) => {
              return (
                <tr>
                  <td data-label="Patient ID">{data?.cnic}</td>
                  <td data-label="Date">{data?.date}</td>
                  <td data-label="Result">{data?.type_of_cancer}</td>
                  <td data-label="Description">{data?.description}</td>
                  <td data-label="Download">
                    <div className="download-link">
                      <PDFDownloadLink
                        document={<PdfDocument data={data} />}
                        fileName="report"
                      >
                        {({ loading }) =>
                          loading ? "Loading..." : "Download Report"
                        }
                      </PDFDownloadLink>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </TableStyle>
  );
}

export default DocViewAllPatient;

