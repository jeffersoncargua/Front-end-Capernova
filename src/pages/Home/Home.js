//import { Products} from '../../components/Products';
//import { Hero,Nosotros,Feedback, SliderProduct } from '../Home/components';
import { Hero,Feedback, SliderProduct } from '../Home/components';

export const Home = ({children}) => {
  return (
    <div className='dark:bg-gray-900' >
      <Hero />
      <SliderProduct />
      {/* <Nosotros /> */}
      <Feedback />
      {children}
    </div>
  )
}
