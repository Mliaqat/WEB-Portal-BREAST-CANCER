import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from './Component/Navbar/Navbar';
import THEMES from './style/theme';
import { GlobalStyle } from './style/globalStyle';
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';
import Login from './Pages/Login/Login';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={THEMES}>
          <GlobalStyle />
          <Navbar />
          <Route exact={true} path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Team" component={Team} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />

          <Footer />
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
