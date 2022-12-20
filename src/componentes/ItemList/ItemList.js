import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productList}) => {



  return (
    <div className='contenedor'>
        {
            productList.map (items => <Item key={items.id} {...items}/> )
        }
    </div>
  )
}

export default ItemList