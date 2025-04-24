import {motion} from 'framer-motion'
const summuraire = [
    {
        icone:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A8.962 8.962 0 0112 15c2.21 0 4.215.804 5.879 2.136M15 11a3 3 0 10-6 0 3 3 0 006 0z" />
      </svg>
      ,
        titre :"Total Leads",
        nombre :"300",
        description:"Diinput"
    },
    {
        icone:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h6M4 5a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 100 4v3a2 2 0 10 0 4v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 100-4v-3a2 2 0 100-4V5z" /></svg>,
        titre :"Total Terjual",
        nombre :"3",
        description:"Proprety terjual"
    },
    {
        icone:<svg className="w-5 h-5 mr-2 text-white-400" fill="currentColor" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0016 16l112-.29a16 16 0 0016-15.7V368a16 16 0 0116-16h64a16 16 0 0116 16v96a16 16 0 0016 15.72l112 .29a16 16 0 0016-16V300L295.67 148.26a12.19 12.19 0 00-15.3 0zM573.32 268.35L488 203.8V44a12 12 0 00-12-12h-56a12 12 0 00-12 12v72.61L318.47 43a48 48 0 00-61 0L2.61 268.35a12 12 0 00-1.6 17l25.5 31a12 12 0 0017 1.6L64 271.91V464a48 48 0 0048 48h112a48 48 0 0048-48v-96h64v96a48 48 0 0048 48h112a48 48 0 0048-48V271.9l20.9 17a12 12 0 0017-1.6l25.5-31a12 12 0 00-1.58-17z"/></svg>,
        titre :"Total Proprety",
        nombre :"3",
        description:"Proprety Tersadia"
    },
    {
        icone:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-600">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
        titre :"Lost Leads",
        nombre :"96",
        description:"Leads Lost"
    }
]



export function Summary(){
    return(
        <div className=" lg:bg-white p-5 w-[95%] rounded-md shadow flex  flex-col mx-auto gap-5 text-black">
            <h1>Summary</h1>
           <div className="flex justify-between flex-nowrap gap-3 flex-wrap">
           {summuraire.map((element,index)=>(
               <motion.div 
               initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1}}
               transition={{delay:index+0.3,type:'spring',duration:1.3}}
               key={index} className="bg-gray-50 lg:bg-gray-100 rounded-md p-5 w-50">
               <div className="flex font-bold">
               <span className="">{element.icone}</span>
               <h6>{element.titre}</h6>
               </div>
                <div>
                <p><span className="text-[30px] font-bold">{element.nombre} </span> <span className="opacity-60">{element.description}</span></p>
                </div>
               </motion.div>
            ))}
           </div>

        </div>
    )
}