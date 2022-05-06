import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { TableStyle } from '../../../CommnonStyle/Dashboard.style';
import PdfDocument from "../../../../Component/PdfReport/Report";

function ViewReport() {
    const url = `${process.env.REACT_APP_BASE_URL}/reports`;
  const [data, setData] = useState([]);

  useEffect(() => {
    getreports();
  }, []);

  const getreports = async () => {
    await axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <TableStyle>
      <h2 className="title">View Report</h2>
      <hr className="mb-5"></hr>

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
          {data &&
            data.map((data, index) => {
              return (
                <tr>
                  <td data-label="Patient ID">{data?.cnic}</td>
                  <td data-label="Date">03/01/2016 </td>
                  <td data-label="Result">{data?.type_of_cancer}</td>

                  <td>
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

export default ViewReport;
