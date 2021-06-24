import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './views/Home.jsx';
import { Menu } from './views/Menu.jsx';
import { Mesas } from './views/Mesas.jsx';
import { Orden } from './views/Orden.jsx';
import { Pago } from './views/Pago.jsx';
import NavHour from './complements/NavHour';

function App() {
  return (
    <Router>
    <div className="container">
        
        <div className="btn-group"> 
          <Link to="/home" className="btnNav btnNavText color">HOME</Link>
          <Link to="/mesas" className="btnNav btnNavText">MESAS</Link>
          <Link to="/menu" className="btnNav btnNavText">MENU</Link>
          <Link to="/orden" className="btnNav btnNavText">ORDEN</Link>
          <Link to="/pago" className="btnNav btnNavText">PAGO</Link>
          <NavHour />
        </div>
   

        <Switch>
          <Route path="/home" exact>
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