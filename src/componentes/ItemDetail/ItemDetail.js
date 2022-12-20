import React, { useEffect, useState } from 'react'
import { products } from '../mock/Productos'



const ItemDetail = ({item }) => {

      const onAdd=(quantity)=>{
        console.log(quantity)
      }
        return (
         
          <div className="card w-96 bg-base-100 shadow-xl m-8 detalle"><font></font>
       <div className="card-body"><font></font>
         <h2 className="card-title">{item.title}</h2><font></font>
         <p></p><font></font>
       </div><font></font>
       <figure><img src={item.img}  alt="" /></figure><font></font>
       <div>Detalle: {item.description}</div>
       <div>Cantidad: {item.cantidad}</div>
       <div>Precio:  ${item.precio}</div>
       <button className='btn'>Comprar</button>
       
           </div>
          
        )
      }
      
  
    

export default ItemDetail