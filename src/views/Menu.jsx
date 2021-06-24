import React from 'react'
import NavRight from '../complements/NavRight'
import ContainerEmpty from '../complements/ContainerEmpty'
import NavLeft from '../complements/NavLeft'

export const Menu = () => {
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
