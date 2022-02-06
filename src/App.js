import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import THEMES from "./style/theme";
import { GlobalStyle } from "./style/globalStyle";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SingUp";

function App() {
  return (
    <Switch>
      <ThemeProvider theme={THEMES}>
        <GlobalStyle />
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/signup" component={SignUp} />
      </ThemeProvider>
    </Switch>
  );
}

export default App;
