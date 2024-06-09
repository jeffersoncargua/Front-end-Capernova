import { useNavigate } from "react-router-dom";
//import { useRef,useState } from "react";
//import { baseURL } from "../endpoints";
//props en caso de que funcione la autenticacion de 2FA
//response,setShowModal,refEmail

export const ModalLogin = ({response,setShowModal}) => {

    //const [showButtonLoading, setShowButtonLoading] = useState(false);
    //const [responseModal,setResponseModal]= useState({});
    const navigate = useNavigate();
    //const refUserName = useRef();
    //const refCodigo = useRef();
    console.log(typeof(refEmail));

    /*const handleSubmitOTP = async (event) => {
        event.preventDefault();
        setShowButtonLoading(true);
        try{
            let resultFetch = await fetch(`https://localhost:7164/api/Authentication/login-2FA`, {
                method:'POST', 
                headers:{
                  "Content-Type" : "application/json",
                  "Accept" : "application/json",
                },
                body: JSON.stringify({          
                    email: refUserName.current.value,
                    otp: refCodigo.current.value
                  })
                });
                console.log(JSON.stringify({          
                    email: refEmail,
                    otp: refCodigo.current.value
                  }));
                let result = await resultFetch.json(); //permite esperar hasta que se le entregue el resultado del api
                setShowButtonLoading(false);
                setResponseModal(result);
                if(result.isSuccess){
                    navigate('/student');
                }
                console.log(result);
            
        }catch(error){
            setShowButtonLoading(false);
            console.error('Algo salio mal al crear el registro: ', error);
        }

    }*/


  return (
    <div id="popup-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 mx-auto w-full max-w-md h-full">
            <div className="relative  bg-white my-[50%] rounded-lg shadow dark:bg-gray-700">
                <button onClick={()=>setShowModal(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                    {response.isSuccess ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-check-circle mx-auto mb-4 text-green-400 w-12 h-12 dark:text-gray-200`} viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg>)
                    :
                    (
                    <svg className={`mx-auto mb-4 text-red-400 w-12 h-12 dark:text-gray-200`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>)
                    }

                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{response.message}</h3>

                    {response.isSuccess ? 
                    (<button onClick={()=>{navigate('/student')}} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ok</button>)
                    :
                    (<button onClick={()=>{setShowModal(false)}} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ok</button>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}


/* En caso de que funcione la autenticacion de 2FA
{response.isSuccess ? (
                    <form onSubmit={handleSubmitOTP} className="w-[90%] mx-auto" >
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email"  name="email" id="email" className="hidden block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rouded-lg" placeholder=" " required ref={refUserName} defaultValue={refEmail} />
                            <label htmlFor="email" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingresa el codigo</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" pattern="[0-9]{6}" name="codigo" id="codigo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer rouded-lg" placeholder=" " required ref={refCodigo}/>
                            <label htmlFor="codigo" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ingresa el codigo</label>
                        </div>
                        {showButtonLoading ? 
                        (<button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>
                        Procesando...
                        </button>)
                        :
                        (<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>)
                        }
                        {responseModal && <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{responseModal.message}</h3>}
*/