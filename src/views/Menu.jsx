import React, { useState, useEffect } from "react";
import data from '../Food.json'

export const Menu = () => {
    const [arrayMenu, setArrayMenu] = useState([]);
    const [dataMenu, setDataMenu] = useState([]);
    const [listadoProductos, setListadoProductos] = useState([]);
    
    useEffect(() => {
  
      const getMenu = () => {
        setDataMenu(data);
      }
    
      getMenu();
    }, [listadoProductos]);
  
    const agregarProductos = (item) =>{
  
      const product = JSON.parse(item)
      
      setListadoProductos([
        ...listadoProductos,
        {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
          type: product.type
        }
      ]);
      
    }
    
    const selectMenu = (option) => {
        
      switch (option) {
        case "sweet":
          setArrayMenu(dataMenu.filter(item => item.type === 'sweet'));
          console.log("Carga menú sweet");
          break;
        case "salty":
          setArrayMenu(dataMenu.filter((item) => item.type === "salty"));
          console.log("Carga menú salty");
          break;
        case "drinkables":
          setArrayMenu(dataMenu.filter((item) => item.type === "drinkables"));
          console.log("Carga menú bebestibles");
          break;
        default:
          console.log("error");
      }
    };
    

    return (
        <div className="containerMenu"> 
            <div className="navLeft">
                 <button className="btnLeft menu-sweet"
                 onClick={() => selectMenu("sweet")}>Dulce</button>
                <button className="btnLeft menu-salt" 
                onClick={() => selectMenu('salty')} >Salado</button>
                <button className="btnLeft menu-drinkables" 
                onClick={() => selectMenu("drinkables")}>Bebestibles</button>
            </div>
            <div className="containerEmpty overflow-auto">
            {arrayMenu.map((item) => (
                    <div className="cardContainer" key={item.id}>
                    <div className="card-img">
                        <img className="card-img-top"
                        src={item.image}
                        alt={item.title}/>
                        </div>
                        <div className="card-element">
                        <div className="card-text"><strong>{item.title}</strong></div>
                        <p className="card-text">{item.description}</p>
                        <div className="card-text">{'$' + item.price}</div>
                        </div>
                        <button
                        className="btn btn-info"
                        onClick={() => agregarProductos(JSON.stringify(item))}>
                        +
                        </button>
                        </div>            
                ))}
            </div>
        <div className="navRight"></div> 
        </div>
    )
}