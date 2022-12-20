import React from 'react'
import {Link} from 'react-router-dom'



const Item = ({id, category, cantidad, title, medida , precio ,stock, description,img }) => {
  return (
   
    <div className="card w-96 bg-base-100 shadow-xl m-8"><font></font>
 <div className="card-body"><font></font>
   <h2 className="card-title">{title}</h2><font></font>
   <p></p><font></font>
 </div><font></font>
 <figure><img src={img}  alt="" /></figure><font></font>
 <Link to={`/detalles/${id}`}>
 <button className='btn'>Ver detalle</button>
 </Link>
     </div>
    
  )
}

export default Item