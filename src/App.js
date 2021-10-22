import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from './Component/Navbar/Navbar';
import THEMES from './style/theme';
import { GlobalStyle } from './style/globalStyle';
import Home from './Pages/Home/Home';
import Footer from './Component/Footer/Footer';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={THEMES}>
          <GlobalStyle />
          <Navbar />
          <Route exact={true} path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Footer />
        </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
