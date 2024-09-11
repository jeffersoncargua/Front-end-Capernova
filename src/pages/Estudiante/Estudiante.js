import { useEffect, useState } from "react";
import { PlayerVideo, SideBar, Logros, Courses, Informacion,Deberes,Pruebas,Comentario,DeberDetail} from './components';
import { useSelector } from "react-redux";


export const Estudiante = () => {

  const [showPlayer, setShowPlayer] = useState(false);
  const [showLogro, setShowLogro] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showDeberes, setShowDeberes] = useState(false);
  const [showPruebas, setShowPruebas] = useState(false);
  const [showInformacion, setShowInformacion] = useState(true);
  const [showDeberDetail,setShowDeberDetail] = useState(false);
  const [estudiante, setEstudiante] = useState({});
  //const [curso, setCurso] = useState({});
  const [response, setResponse] = useState({});
  const [matricula,setMatricula] = useState({});


  const userStudent = useSelector(state => state.userState.user);
  //console.log(userStudent);

  useEffect(()=>{
      const fetchEstudiante = async() => {
        const resultFromApi = await fetch(`https://localhost:7164/api/Student/getEstudiante?id=${userStudent.nameIdentifier}`,{
          method:'GET',
          credentials : 'include',
          headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
          }
        });
  
        const resultFetch = await resultFromApi.json();
        //console.log(resultFetch);
        if (resultFetch.isSuccess) {
          setEstudiante(resultFetch.result);
        }
      };

      fetchEstudiante();

  },[userStudent])

  return (
    <div className="relative w-[95%] mx-auto">
        {/*Barra lateral de navegacion del estudiante */}

        <SideBar setShowPlayer={setShowPlayer}  setShowLogro={setShowLogro} setShowCourses={setShowCourses} setShowDeberes={setShowDeberes} setShowPruebas={setShowPruebas} setShowInformacion={setShowInformacion} setShowDeberDetail={setShowDeberDetail} /> 

        {/*Informacion del estudiante */}
        
        {showInformacion && 
        <div className="p-4 sm:ml-56">
          <Informacion estudiante={estudiante} response={response} setResponse={setResponse} />
        </div>
        }

        {showCourses && 
        <div className="p-4 sm:ml-56">
          <Courses setShowPlayer={setShowPlayer} setShowCourses={setShowCourses} estudiante={estudiante} setMatricula={setMatricula} />
        </div>}

        {showPlayer && 
        <div className="p-4 sm:ml-56">
          {/*Reproductor de video con el playlist */}
           <PlayerVideo estudiante={estudiante} matricula={matricula} setMatricula={setMatricula}/> 
           {/*Componente para escribir un comentario */}
            <Comentario estudiante={estudiante} matricula={matricula} />
        </div>}
        {/*Mostrar los logros de los cursos */}
        
        {showLogro && 
          <div className="p-4 sm:ml-56" >
            <Logros estudiante={estudiante} />
          </div>}

        {showDeberes && 
        <div className="p-4 sm:ml-56" >
          <Deberes estudiante={estudiante} setMatricula={setMatricula} setShowDeberDetail={setShowDeberDetail} />
        </div>}

        {showDeberDetail && 
        <div className="p-4 sm:ml-56" >
          <DeberDetail matricula={matricula} />
        </div>}

        {showPruebas && 
        <div className="p-4 sm:ml-56" >
          <Pruebas estudiante={estudiante} />
        </div>}

    </div>
  )
}
