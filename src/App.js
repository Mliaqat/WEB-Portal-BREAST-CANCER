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

function App() {
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
