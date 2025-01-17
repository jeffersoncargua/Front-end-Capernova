import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Videos } from '../Components'
//import { SideBar,Cursos,Videos,Estudiantes,Informacion,Deberes,Pruebas } from "./Components" //Estos contiente los componentes del Profesor pero se quiere emplear componentes en comun con Administración
import { SideBar,Cursos,Estudiantes,Informacion,Deberes,Pruebas } from "./Components";
import { toast } from "react-toastify";

export const Profesor = () => {

  const userTeacher = useSelector(state => state.userState.user); //permite obtener el id del profesor cuando se loguea

  let [cursoList, setCursoList] = useState([]);
  let [curso, setCurso] = useState({});
  const [profersor, setProfesor] = useState({});
  const [search, setSearch] = useState('');
  const [showInformacion,setShowInformacion] = useState(true);
  const [showEstudiante,setShowEstudiantes] = useState(false);
  const [showCursos,setShowCursos] = useState(false);
  const [showDeberes,setShowDeberes] = useState(false);
  const [showPruebas,setShowPruebas] = useState(false);
  const [showVideos,setShowVideos] = useState(false);
  const [response, setResponse] = useState({});

//   const GetCurso = useCallback(async()=>{
//     try {
//       const resultFromApi = await fetch(`https://localhost:7164/api/Teacher/getAllCourse?id=${userTeacher.nameIdentifier}&search=${search}`,{
//         method:'GET',
//         credentials : 'include',
//         //mode: 'no-cors',
//         headers:{
//           'Content-Type' : 'application/json',
//           'Accept' : 'application/json',
          
//         }
//       });

//      let resultFetch = await resultFromApi.json();

//      if (resultFetch.isSuccess) {
//       console.log(resultFetch);
//       setCursoList(resultFetch.result);
//       setProfesor(resultFetch.result[0].teacher);
//      }
//     //const capitulos = JSON.parse(resultFetch.result[0].capitulos);
//     } catch (error) {
//       console.error(error)
//     }
    
//    //setCursoList(list);
//  },[userTeacher,search])


  useEffect(()=>{
    const GetTeacher = async()=>{
      try {
        const resultFromApi = await fetch(`${process.env.REACT_APP_API_URL}/Teacher/getTeacher?id=${userTeacher.nameIdentifier}`,{
          method:'GET',
          credentials : 'include',
          //mode: 'no-cors',
          headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',  
          }
        });


        const resultFetch = await resultFromApi.json();
        
        if (resultFromApi.status !==200 && resultFromApi.status !== 400) {
          throw resultFetch;
        }

        if (resultFetch.isSuccess) {
          setProfesor(resultFetch.result);
        }else{
          setProfesor({});
        }

      } catch (error) {
        console.error(error)
        toast.error('Algo ha fallado en nuestro servidor. Inténtelo más tarde');
      }
    }

    GetTeacher();
    
  },[userTeacher])

 
   useEffect(()=>{
    const GetCurso = async()=>{
      try {
        const resultFromApi = await fetch(`${process.env.REACT_APP_API_URL}/Teacher/getAllCourse?id=${userTeacher.nameIdentifier}&search=${search}`,{
          method:'GET',
          credentials : 'include',
          //mode: 'no-cors',
          headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            
          }
        });
  
       let resultFetch = await resultFromApi.json();

       if (resultFromApi.status !== 200 && resultFromApi.status !== 400) {
        throw resultFetch;
       }
  
       if (resultFetch.isSuccess) {
        //console.log(resultFetch);
        setCursoList(resultFetch.result);
        //setProfesor(resultFetch.result[0].teacher);
       }else{
        setCursoList([]);
       }
      //const capitulos = JSON.parse(resultFetch.result[0].capitulos);
      } catch (error) {
        console.error(error)
        toast.error('Algo ha fallado en nuestro servidor. Inténtelo más tarde');
      }
    }

   GetCurso();

   },[response,search,userTeacher])

   //console.log(cursoList);
   //console.log(profersor);

  return (
    <div className="w-[95%] mx-auto">
      <SideBar setShowInformacion={setShowInformacion} setShowCursos={setShowCursos} setShowVideos={setShowVideos} setShowEstudiantes={setShowEstudiantes} setShowDeberes={setShowDeberes} setShowPruebas={setShowPruebas} setResponse={setResponse} />
      
      <div className="md:ml-64">
        
        {showInformacion && <Informacion profesor={profersor} response={response} setResponse={setResponse}/>}
        {showCursos && <Cursos setShowCursos={setShowCursos} setShowVideos={setShowVideos} cursoList={cursoList} curso={curso} setResponse={setResponse} setCurso={setCurso} setSearch={setSearch} setShowDeberes={setShowDeberes} setShowPruebas={setShowPruebas} />}
        {showVideos && <Videos setShowCursos={setShowCursos} setShowVideos={setShowVideos} curso={curso} setCurso={setCurso} setShowDeberes={setShowDeberes} setShowPruebas={setShowPruebas} />}
        {showDeberes && <Deberes setShowCursos={setShowCursos} setShowVideos={setShowVideos} curso={curso} setCurso={setCurso} setShowDeberes={setShowDeberes} setShowPruebas={setShowPruebas} />}
        {showPruebas && <Pruebas setShowCursos={setShowCursos} setShowVideos={setShowVideos} curso={curso} setCurso={setCurso} response={response} setResponse={setResponse} setShowDeberes={setShowDeberes} setShowPruebas={setShowPruebas} />}
        {showEstudiante && <Estudiantes cursoList={cursoList} />}
      </div>
    </div>
  )
}
