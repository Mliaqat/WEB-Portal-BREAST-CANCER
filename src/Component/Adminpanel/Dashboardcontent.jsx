import React from "react";
import "./Style/Adminpanel.style.js";
// import { counters, orders } from "../../mockData/dashboard";
import Card from "../../Component/CardDashboard/Card";
import { Adminpanelstyle } from "./Dashboardcontent.style.js";
import { counters } from "../../MockData/DashboardData.js";

function Dashboardcontent() {
  return (
    <Adminpanelstyle>
      <main className=" mt-5 mainsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Dashboard</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3">
              <article className="counters-wrapper">
                {counters.map((counter, index) => {
                  return (
                    <Card
                      key={index}
                      className="counter"
                      cardType="verticalCard"
                      {...counter}
                    />
                  );
                })}
              </article>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-3">
              <table className="customer-table" width="100%">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                  </tr>
                  <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2012/03/29</td>
                    <td>$433,060</td>
                  </tr>
                  <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                  </tr>
                  <tr>
                    <td>Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2012/12/02</td>
                    <td>$372,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </Adminpanelstyle>
  );
}

export default Dashboardcontent;
