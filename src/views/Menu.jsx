import React from 'react'

export const Menu = () => {
    return (
        <div className="containerMenu"> 
            <div className="navLeft">
                <button className="btnLeft menu-salt">Salado</button>
                <button className="btnLeft menu-sweet">Dulce</button>
                <button className="btnLeft menu-drinkables">Bebestibles</button>
            </div>
            <div className="containerEmpty"></div>
            <div className="navRight"></div> 
        </div>
    )
}
