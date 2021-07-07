import React from 'react'

export const Home = () => {
    return (
     <div className="containerHome"> 
            <div className="containerEmptyBig">
                <div className="welcome-text text-center h1" >BIENVENIDO</div>
                <div className="welcome-text text-center h2" >Have a good day!</div>
            </div>
         <div className="navRight">
             <button className="btn btn-md mb-5 btn-info btn-block logout">FINALIZAR TURNO</button>
             </div> 
    </div>
    )
}
