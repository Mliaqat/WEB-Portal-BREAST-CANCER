import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import THEMES from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SingUp";
import Adminpanel from "./Component/Adminpanel/Adminpanel";

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={THEMES}>
          <GlobalStyle />
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Team" component={Team} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/signup" component={SignUp} />
          <Route excat path="/admin" component={Adminpanel} />
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
