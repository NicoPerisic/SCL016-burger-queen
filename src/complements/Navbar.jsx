import React from 'react'
import NavHour from './NavHour'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="btn-group"> 
          <Link to="/home" className="btnNav btnNavText color">HOME</Link>
          <Link to="/mesas" className="btnNav btnNavText">MESAS</Link>
          <Link to="/menu" className="btnNav btnNavText">MENU</Link>
          <Link to="/orden" className="btnNav btnNavText">ORDEN</Link>
          <Link to="/pago" className="btnNav btnNavText">PAGO</Link>
          <NavHour />
        </div>
    )
}
