import React from 'react'
import NavRight from '../complements/NavRight.jsx'
import ContainerEmpty from '../complements/ContainerEmpty.jsx'
import NavLeft from '../complements/NavLeft.jsx'

export const Mesas = () => {
    return (
        <div className="containerGeneral">
            <div className="containerMesas"> 
                <NavLeft />
                <ContainerEmpty />
                <NavRight />
            </div>
        </div>
    )
}
