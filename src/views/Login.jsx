import React from 'react'
import Brown from '../images/4x/brown.png';
import { FormLogin } from '../complements/FormLogin';

export const Login = () => {
    return (
        <div>
            <div className="containerLogin"> 
                <img className="logoBrown" src={Brown} alt="" width="700vw" height="70hv"/> 
                <FormLogin/>
                </div>
            <div className="footer small text-center" >&copy;2021 Desarrollado por Tania Cariz. Laboratoria SCL016</div>
        </div>
    )
}
