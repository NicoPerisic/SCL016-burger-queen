import React from 'react'
import NavRightHome from '../complements/NavRightHome.jsx'

export const Home = () => {
    return (
        <div className="containerGeneral">
            <div className="containerHome">  
            <div className="containerImg">
                <form className ="formLogin">
                    <label for="email">Correo:</label><input className="formElements" placeholder="Ingresa tu correo" type="text" name="email" id="emailHome"/>
                    <label for="password">Contraseña:</label><input className="formElements" placeholder="Ingresa tu contraseña" type="text" name="password" id="passwordHome" />
                    <input type="submit" id="btnLogin" value="Aceptar" />
                </form>     
            </div>
             <NavRightHome />
            </div>
        </div>
    )
}
