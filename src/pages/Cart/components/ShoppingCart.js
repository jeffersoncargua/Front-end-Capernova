import { useEffect, useState } from "react"
//import { ShoppingCard } from "../components"
import { useNavigate } from "react-router-dom";

export const ShoppingCart = ({cartList}) => {


  const navigate = useNavigate();
  const [total,setTotal] = useState(0);
  

  /*Permite realizar la suma del total de los articulos del carrito de compras cada vez que se quiera revisar cuanto se debe pagar */
  useEffect(()=>{
    let totalRef = 0;
    /*Este forEach permite realizar la suma de los precios de cada item en el carrito de compras */
    cartList.forEach(element => {
      totalRef += element.price;
    });
    setTotal(totalRef);
  },[cartList])

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-y-8">
    <h1 className="font-medium text-xl text-center dark:text-white">Tu carrito contine: <span className="text-pink-400 text-2xl dark:text-pink-500">{cartList.length}</span>  items</h1>
    {/*Nuevo modelo del carrito de compras */} 
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto">
      <table className="w-full text-sm text-left rtl:text-right dark:text-white">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
              <tr>
                  <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Producto
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Precio
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
              </tr>
          </thead>
          <tbody>
            {cartList.length>0 && cartList.map((item)=>(
              <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                      <img src={item.imagen} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch"/>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.title}
                  </td>                      
                  <td className="px-6 py-4 text-pink-400 font-semibold text-gray-900 dark:text-white">
                    ${item.price}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className=" transition duration-300 ease-in-out rounded-lg hover:scale-90 hover:text-white text-black bg-blue-600 hover:bg-red-600 py-2 px-6 mx-8 mb-2">Remove</button>
                  </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
    {/*Boton para realizar las compras */}
    <div className="grid justify-items-end justify-end items-center mb-8 w-[80%] mx-auto">
      <div className="flex items-center">
        <h1 className="text-3xl">Total a pagar: &nbsp; </h1>
        <span className="text-3xl text-pink-600">${total}</span>
      </div>
      <div className="mt-8">
        <button onClick={()=>navigate('/order') } className="block bg-blue-600 rounded-lg transition duration-300 hover:text-white hover:bg-green-600 hover:scale-110 py-2 px-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 bi bi-cart-check inline-block mr-2" viewBox="0 0 16 16">
            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
          Realizar Compra
        </button>
      </div>          
    </div> 
    
  </div>  
  )
}
