import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { products } from '../mock/Productos'

export const ItemListContainer = () => {
    const [productList, setProductList] = useState([])

  const {category} = useParams()

  console.log(category)

    
  
  const getProducts = () => new Promise((resolve, reject) => {
    if(category) {
      setTimeout(()=> resolve(products.filter(item => item.category === category)), 2000)
    } else {
      setTimeout(()=> resolve(products), 2000)
    }
  })
  useEffect(() => {
    getProducts()
    .then(products => setProductList(products))
    .catch(error => console.error(error))

    return () => {
      setProductList([])
    }

  }, [category])

  

  return (
    <>
      {
        productList.length ? <ItemList productList={productList} /> : <h1>Cargando...</h1>
      }
      
    </>
  )
    }

export default ItemListContainer