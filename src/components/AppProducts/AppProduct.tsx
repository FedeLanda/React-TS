import { useState } from "react"
import { FormProduct } from "./FormProduct/FormProduc"
import { Header } from "./Header/Header"
import { ListProduct } from "./ListProducts/ListProduct"

interface ItemProduct{
  precio:number,
  imagen:string,
  nombre:string
}

export const AppProduct = () => {

  const[products, setProducts]=useState<ItemProduct[]>([])
  console.log(products);

  const handleAddProduct=(newItem: ItemProduct)=>{
    setProducts((prev)=>[...prev, newItem])
  }
  return (
    <>
        
        <Header/>
        <h2 className="text-center"> Formulario</h2>
        <FormProduct handleAddProducts={handleAddProduct}  />
        <h2 className="text-center">Productos</h2>
        {products.length>0?<ListProduct arrItem={products}/>: <h3>No hay Productos </h3>}
        
    </>
  )
}
