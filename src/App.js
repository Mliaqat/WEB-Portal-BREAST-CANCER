import "./App.css";
import * as ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import THEMES from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SingUp";
import { ThemeProvider } from "styled-components";
import AdminProtal from "./Dashboards/AdminProtal/AdminProtal";
import DoctorProtal from "./Dashboards/DoctorProtal/DoctorProtal";
import UserProtal from "./Dashboards/UserProtal/UserPortal";

import AdminDashboard from "./Dashboards/AdminProtal/AdminProtalSubPages/AdminDashboard/AdminDashboard";
import DoctorDashboard from "./Dashboards/DoctorProtal/DoctorProtalSubPages/DoctorDashboard/DoctorDashboard";
import DocViewAllPatient from "./Dashboards/DoctorProtal/DoctorProtalSubPages/DocViewAllPatient/DocViewAllPatient";
import UserDashboard from "./Dashboards/UserProtal/UserProtalSubPages/UserDashboard/UserDashboard";
import ViewReport from "./Dashboards/UserProtal/UserProtalSubPages/ViewReport/ViewReport";
import { useEffect } from "react";

import UpdateProfile from "./Dashboards/AdminProtal/AdminProtalSubPages/UpdateProfile/UpdateProfile";
import ManagePatient from "./Dashboards/AdminProtal/AdminProtalSubPages/ManagePatient/ManagePatient";
import ManageDoctor from "./Dashboards/AdminProtal/AdminProtalSubPages/ManageDoctor/ManageDoctor";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={THEMES}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Team" element={<Team />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="admin-protal" element={<AdminProtal />}>
            <Route index element={<AdminDashboard />} />
            <Route index path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="managepatient" element={<ManagePatient />} />
            <Route path="managedoctor" element={<ManageDoctor />} />
            <Route path="updateprofile" element={<UpdateProfile />} />
          </Route>

          <Route path="doctor-protal" element={<DoctorProtal />}>
            <Route path="doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="docview-all-patient" element={<DocViewAllPatient />} />
          </Route>

          <Route path="user-protal" element={<UserProtal />}>
            <Route path="user-dashboard" element={<UserDashboard />} />
            <Route path="view-report" element={<ViewReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
