
export const ProgressBar = ({porcentaje,isCompleted,setShowModalDownload, setResult }) => {


  const handleGetCertificate = async() => {

    const result = await fetch(`https://localhost:7164/api/Student/getCertificate/${5}`,{
      method: 'GET',
      headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      }
    });

    const resultFetch = await result.json();
    console.log(resultFetch);
    setShowModalDownload(true);
    setResult(resultFetch.result);
  }

  return (

    <button onClick={() => handleGetCertificate()} disabled={!isCompleted} className={`${isCompleted? 'hover:cursor-pointer':'hover:cursor-not-allowed'}`}>
      <div className="relative w-28 h-28 block mb-2 flex flex-col justify-center items-center ">

      {!isCompleted? 
      (<h1 className="text-sm">Progreso</h1>) 
      : 
      (<h1 className="w-full text-sm">¡Presiona la copa!</h1>)}

        <svg className="" viewBox="0 0 100 100">
          {/*<!-- Background circle -->*/}
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="8" //permite colocar el grosor del circulo
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          ></circle>

          {/*<!-- Progress circle -->*/}
          <circle
            className="text-indigo-500 progress-ring__circle stroke-current"
            strokeWidth="8" //permite colocar el grosor del circulo
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="45" // radio de la circunferencia
            fill="transparent"
            strokeDasharray="282.74" // se obtiene mediante la formula del diametro=2r(pi) y permite rellenar el avance 
            strokeDashoffset={`calc(282.74 - (282.74 * ${porcentaje} ) / 100)`} // permite rellenar la circunferencia de lo que falta del avance
          ></circle>
          
          {/*<!-- Center text -->*/}
          <svg x='30' y='30' xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`bi bi-trophy-fill z-10 w-1 h-1 ${porcentaje === 100 ?'text-yellow-300':'text-gray-300'}`} viewBox="0 0 40 40">
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
          </svg>
          {/*<text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" alignmentBaseline="middle">70%</text>*/}
        </svg>
      </div>
    </button>
    
  )
}
