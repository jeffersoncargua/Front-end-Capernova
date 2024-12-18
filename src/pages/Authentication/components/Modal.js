import { useNavigate } from "react-router-dom";

export const Modal = ({response,setShowModal,tipo/*,messagePassword,setMessagePassword*/}) => {

    const navigate = useNavigate();


  return (
    <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 mx-auto w-full max-w-md h-full">
            <div className="relative bg-white my-[20%] rounded-lg shadow dark:bg-gray-700">
                <button onClick={()=>setShowModal(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                    {response.isSuccess ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-check-circle mx-auto mb-4 text-green-500 w-12 h-12 dark:text-green-400`} viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg>)
                    :
                    (
                    <svg className={`mx-auto mb-4 text-red-500 w-12 h-12 dark:text-red-400`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>)
                    }

                    {response.isSuccess? (
                        <h3 className="mb-5 text-lg font-normal text-black dark:text-white">{response.message}</h3>
                    )
                    :(response.message === "El usuario ya está registrado" ? 
                        (<h3 className="mb-5 text-lg font-normal text-black dark:text-white">{response.message}</h3>):
                        (<>
                            {tipo ==='register'? 
                            (<h2 className="mb-2 text-lg font-semibold text-black dark:text-white">Para registrarte debes:</h2>)
                            :(<h2 className="mb-2 text-lg font-semibold text-black dark:text-white">Para cambiar tu constraseña debes:</h2>)}
                            <ul className="max-w-md space-y-1 text-start text-justify text-black list-disc list-inside dark:text-white">
                                <li>
                                    Ingresar una contraseña con al menos 8 caracteres.
                                </li>
                                <li>
                                    Ingresar tu contraseña con al menos un caracter especial (!@#) un número y letra mayúscula.
                                </li>
                                <li>
                                    Ingresar contraseñas iguales para su verificación.
                                </li>                                
                            </ul>
                        </>)
                        
                    )}
                    
                    

                    {/* {messagePassword && <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{messagePassword}</h3>} */}

                    {response.isSuccess ? (<button onClick={()=> navigate('/login')} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4">Ok</button>)
                    :
                    (<button onClick={()=>{setShowModal(false)/*;setMessagePassword('')*/}} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-4">Ok</button>)}

                </div>
            </div>
        </div>
    </div>
  )
}
