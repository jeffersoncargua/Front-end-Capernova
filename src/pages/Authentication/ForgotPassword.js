import { useState, useRef } from "react";
import {ModalForget} from './components';

export const ForgotPassword = () => {
    const [showButtonLoading, setShowButtonLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [response,setResponse] = useState({});
    const refEmail = useRef();
  
    const handleSubmitForget = async(event) =>{
      event.preventDefault();
      setShowButtonLoading(true);
      try {
        const resultFetch = await fetch('https://localhost:7164/api/Authentication/forgot-Password', {
          method:'POST', 
          credentials:'include',
          headers:{
            "Content-Type" : "application/json",
            "Accept" : "application/json",
          },
          body: JSON.stringify({          
              email: refEmail.current.value
            })
          });
          setShowButtonLoading(false);
          let result = await resultFetch.json();
          setResponse(result);
          console.log(result);
          setShowModal(true);
          
      } catch (error) {
        setShowButtonLoading(false);
        console.error('Algo salio mal al crear el registro: ', error);
      }
  
    }

  return (
    <div  className="w-[95%] my-8">
        <blockquote className=" w-1/2 mx-auto flex flex-col">
          <h1 className="text-center text-2xl mb-4">Recuperar contraseña</h1>
          <p>Para recuperar tu contraseña sigue las siguientes indicaciones: </p>
          <ol className="mt-2 space-y-1 text-justify list-decimal list-inside">
            <li>Ingresa correctamente tu correo electrónico y presiona el botón <strong>Enviar</strong></li>
            <li>Revisa la bandeja de tu correo electrónico </li>
          </ol>
        </blockquote>
        <div className="flex justify-center items-center my-8">
          <form onSubmit={handleSubmitForget} >
            <input pattern="[a-zA-Z0-9!#$%&'*\/=?^_`\{\|\}~\+\-]([\.]?[a-zA-Z0-9!#$%&'*\/=?^_`\{\|\}~\+\-])+@[a-zA-Z0-9]([^@&%$\/\(\)=?¿!\.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?" className="text-sm rounded-l-lg focus:border-blue-200 focus:ring-2 focus:ring-blue-200 w-80" name="email" id="email" type="text" placeholder="Escribe tu correo electrónico" required ref={refEmail} autoComplete='off' />
              {showButtonLoading ? 
              (<button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                  <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                Procesando...
              </button>)
              :
              (<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>)
              }
          </form>
        </div>

        {showModal && <ModalForget response={response} setShowModal={setShowModal}/>}
    </div>
  )
}
