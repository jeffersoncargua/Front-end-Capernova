//import { useEffect } from "react"

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import { baseURL } from "../endpoints";

export const ConfirmationEmail = ({children}) => {


    const [response,setResponse] = useState({});
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');
    token.replace(' ','+');
    const email =searchParams.get('email');


    useEffect(()=>{  
      
      try {
        const fetchConfirm = async() =>{
          let resultFetch = await fetch(`https://localhost:7164/api/Authentication/ConfirmEmail?token=${token}&email=${email}`,{
                method:'GET',
                headers:{
                  "Content-Type" : "application/json",
                  "Accept" : "application/json",
                },
          });

          let result= await resultFetch.json();
          setResponse(result);
          //console.log(result);
        }
        fetchConfirm();
          
        } catch (error) {
          console.log(error);
        }
    },[token,email]);

  return (
    <div className="w-[95%] mx-auto mt-10 group text-black dark:text-white">
        <h1 className="text-xl text-green-500 dark:text-green-400 mb-4">{response.message}!!!!!</h1>
        {response.isSuccess && <p className="text-sm">Navega por nuestro sitio web y conoce acerca más sobre nosotros y de nuestros cursos y productos</p>}
        {children}
    </div>
  )
}

