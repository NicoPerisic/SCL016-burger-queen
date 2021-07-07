import './App.css';
import {
  BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Home } from './views/Home.jsx';
import { Menu } from './views/Menu.jsx';
import { Mesas } from './views/Mesas.jsx';
import { Orden } from './views/Orden.jsx';
import { Pago } from './views/Pago.jsx';
import { Login } from './views/Login';
import { Navbar } from './complements/Navbar';

function App() {
  return (
    <Router>
    <div className="container">
      <Navbar />
        <Switch> 
          <Route path="/" exact>
              <Login />
            </Route>
          <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/mesas">
              <Mesas />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/orden">
              <Orden />
            </Route>
            <Route path="/pago">
              <Pago />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;