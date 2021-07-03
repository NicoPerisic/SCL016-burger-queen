import React from 'react'
import Brown from '../images/4x/brown.png';

export const Login = () => {
    return (
        <div>
            <div className="containerLogin"> 
                    <img className="logoBrown" src={Brown} alt="" width="700vw" height="70hv"/> 
                    <div className="login-text h4" >Inicia sesión con tu cuenta</div>
                        <div className="formLogin">
                            <form>
                                <input type="text" name="" id="email" placeholder="Ingresa tu Email"/>
                                <input type="password" name="" id="password" placeholder="Ingresa tu Contraseña"/>
                                <button type="submit">INGRESAR</button>
                            </form>
                        </div>
                    <div className="footer small" >&copy;2021 Desarrollado por Tania Cariz. Laboratoria SCL016</div>
            </div>
        </div>
    )
}
