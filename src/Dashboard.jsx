import { Summary } from './Summary'
import  Graphe  from './Graphe'
import PropertyTable from './PropretyTable'
import {motion} from 'framer-motion'
import imageAparte from './assets/appartementDashboard.png'

export function Dashboard() {
  // pourcentage barre de progression
  const progress = 3;
const max = 10;
const percentage = (progress / max) * 100;
    return (
      <div className='w-[100%] flex-1'>
        <div className="bg-white flex  justify-between items-center p-4 shadow ">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <img className="rounded-full object-contain w-10"
              src="https://visafoto.com/img/passport-photo-original7.jpg"
              alt="Photo de profil"
            />
           <div className="flex flex-col">
           <span className="text-gray-800 font-semibold">Zoukicode</span>
           <span className="bg-blue-100 text-blue-800 px-2 rounded">Manager</span>
           </div>
           <span className="text-[20px] font-bold text-red rotate-[180deg] cursor-pointer">^</span>
          </div>
        </div>

        <div className="block bg-blue-100 pb-10">
    <div className='w-[95%] mx-auto flex-wrap  md:flex-nowrap  md:flex justify-between items-center'>
    <div className="relative">
          <motion.img
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:3.5,type:'spring'}}
          className="w-[100%]  object-cover h-[350px]" src={imageAparte} alt={imageAparte}/>
<motion.select
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:4.5,type:'spring'}}
name="" className="absolute top-1/2 left-5 w-50 outline-none rounded-md bg-white p-1">
  <option value="">Atlant</option>
  <option value="">Los geles</option>
</motion.select>
          </div>
                {/* box */}
            <motion.div
            initial={{y:50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{amount:0.5}}
            transition={{duration:1.5,type:'spring'}}
             className="md:w-120 bg-white text-sm shadow rounded-md w-[100%]  px-[20px] py-[30px]">
              <p className="flex justify-between">Target team <span className="bg-red-500 rounded-md p-1 text-white">30 hari lagi</span></p>
              <p className="font-bold"><span className="text-[50px]">10</span>Proprety</p>
              <div className="">
  <p className="flex justify-between opacity-70">
    Progres penjualan <span><span className="font-bold">3</span>/10</span></p>
    {/* barre de progression */}
    <div className="w-full bg-gray-200 rounded-lg h-3 overflow-hidden">
      <div
        className="bg-amber-200 h-full rounded-lg transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>


  <p className="flex justify-between opacity-70">Start:22/03/2025<span>Start:27/04/2025</span></p>
</div>
            </motion.div>

    </div>
        </div>

        {/* appele des fonction */}
<div className='flex flex-col gap-10'>
<section className=' relative md:bottom-25'>
<Summary />
</section>
<section className="relative md:bottom-10">
    <Graphe />
</section>
  <section>
    <PropertyTable />
  </section>
</div>

      </div>
    );
  }
  