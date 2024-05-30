import { useEffect ,useState } from 'react';

//import Fondo1 from '../assets/fondo1.jpg';
//import Fondo2 from 'https://i.postimg.cc/bStZJRMz/fondo2.jpg';
//import Fondo3 from 'https://i.postimg.cc/xJ7knZ6x/fondo3.jpg';
//import Fondo4 from 'https://i.postimg.cc/2b3bpY7L/fondo4.jpg';
//import Fondo5 from 'https://i.postimg.cc/G988qcpZ/fondo5.png';


export const Hero = () => {

    const [current, setCurrent] = useState(0);

    const slices = [
        {imagen : 'https://i.postimg.cc/wjFMLyF7/fondo5.png' , title: 'Titulo 5' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolor sequi officiis illum distinctio in eos voluptatum omnis qui cumque molestiae tempore ex eligendi ipsam ad aut minus! Sequi, molestiae!'},
        {imagen : 'https://i.postimg.cc/bNcZhjsN/fondo2.jpg' , title: 'Titulo 1' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sint!'},
        {imagen : 'https://i.postimg.cc/BnJtjcTr/fondo3.jpg' , title: 'Titulo 2' , description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eum perferendis quasi maiores tenetur totam!'},
        {imagen : 'https://i.postimg.cc/hPLf43d8/fondo4.jpg' , title: 'Titulo 3' , description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sunt quis iure blanditiis autem consequatur illo dicta perspiciatis doloribus officia.'},
        {imagen : 'https://i.postimg.cc/wjFMLyF7/fondo5.png' , title: 'Titulo 4' , description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt animi velit incidunt, vel facere placeat repudiandae. Recusandae omnis sint officia autem numquam assumenda sit odio?'},
        
    ]

    /*este useEffect se emplea para hacer el slider o carrusel dinamico y automatico */
    useEffect(()=> {
        const interval = setInterval(() => {
            if(current === slices.length-1){
                setCurrent(0);
            }else{
                setCurrent(current + 1);
            }
        }, 5000);
        return () => clearInterval(interval); // Permite limpiar el intervalo para que renderice correctamente luego de ejecutar el useEffect cada 5000 ms
    },[current,slices.length])

  return (
    <div className='bg-gradient-to-r from-green-400 to-blue-500 my-10 rounded-lg dark:bg-gray-900'>
        <div className='m-auto w-full md:w-[60%] overflow-hidden relative rounded-lg'>
            <div className='flex transition ease-in-out duration-1000' style={{transform: `translateX(-${current * 100}%)`}} >
                {slices.map((s,index) => (
                    <div className='shrink-0 w-full' key={index}>
                        <figure className="relative">                        
                            <img src={s.imagen} alt='slice' className='opacity-75' />
                            <figcaption className="absolute text-center text-lg text-black bottom-6">
                                <h3 className='font-semibold text-lg text-center'>{s.title}</h3>
                                <p className='text-sm text-justify' >{s.description}</p>
                            </figcaption>
                        </figure>
                    </div> 
                ))}
            </div>
        </div>
    </div>    
  )
}
