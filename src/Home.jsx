import Sidebar from './Menu'
import {Dashboard} from './Dashboard'
export default function Home(){
   return(
    <div className='flex'>
    <Sidebar />
    <Dashboard />

    </div>
   )
}