import { motion } from "framer-motion";
import { useState } from 'react';



const Sidebar = () => {
    /*
    pour afficher les ul qui sont cacher dans
     Leads Management et
     Reporting
    */
    const [leads,setleads] = useState(false)
    const [Reporting,setReporting] = useState(false)
    const [reponsive_dashboard,setresponsive_dashboard] = useState(false)
    const [click,setclick] = useState(null)
    const [showGraphe, setShowGraphe] = useState(false);



  
    return (
      <>


      <div  className="hidden lg:block bg-gray-900 text-white flex flex-col  w-1/5">

        <div className="px-6 py-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-amber-500">SAMANEA HILL</h1>
        </div>
  
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 p-4">
          <a href="/" className="text-white-400">
          <li  onClick={() => setShowGraphe(true)} className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 text-white-400" fill="currentColor" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0016 16l112-.29a16 16 0 0016-15.7V368a16 16 0 0116-16h64a16 16 0 0116 16v96a16 16 0 0016 15.72l112 .29a16 16 0 0016-16V300L295.67 148.26a12.19 12.19 0 00-15.3 0zM573.32 268.35L488 203.8V44a12 12 0 00-12-12h-56a12 12 0 00-12 12v72.61L318.47 43a48 48 0 00-61 0L2.61 268.35a12 12 0 00-1.6 17l25.5 31a12 12 0 0017 1.6L64 271.91V464a48 48 0 0048 48h112a48 48 0 0048-48v-96h64v96a48 48 0 0048 48h112a48 48 0 0048-48V271.9l20.9 17a12 12 0 0017-1.6l25.5-31a12 12 0 00-1.58-17z"/></svg>
              Dashboard
            </li>
            </a>

     

            {/* Leads Management */}
            <li className={leads ? "relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:border-l-2 after:border-white"  : " "}>

              <div
              onClick={()=>{setleads(!leads)}} className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center justify-between">
                <span className="flex items-center">
                  <svg  className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 640 512"><path d="M96 128a64 64 0 10128 0 64 64 0 10-128 0zm448 0a64 64 0 10128 0 64 64 0 10-128 0zM96 320a96 96 0 00-96 96v32a32 32 0 0032 32h192a32 32 0 0032-32v-32a96 96 0 00-96-96zm448 0a96 96 0 00-96 96v32a32 32 0 0032 32h192a32 32 0 0032-32v-32a96 96 0 00-96-96z"/></svg>
                  Leads Management
                </span>
                <motion.svg
                  animate={{rotate: leads ?180 :0}}
                  transition={{type:"spring",duration:0.5}}
                className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512"><path d="M96 192l128 128 128-128z"/></motion.svg>
              </div>
              {leads && (
                
                  <ul  
                  className="ml-6 mt-1 space-y-1">
                <li  className="hover:bg-gray-800 px-3 py-1 rounded cursor-pointer"><a href="/">Leads Activity</a></li>
                <li className="hover:bg-gray-800 px-3 py-1 rounded cursor-pointer">Lost Management</li>
                <li className="hover:bg-gray-800 px-3 py-1 rounded cursor-pointer">Import Leads</li>
              </ul>
              )}
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M496 384h-16V208a24 24 0 00-24-24h-16V112a48 48 0 00-96 0v72h-64V96a48 48 0 00-96 0v88H64V80a48 48 0 00-96 0v336h128v-32a32 32 0 0132-32h64a32 32 0 0132 32v32h128v-32a32 32 0 0132-32h64a32 32 0 0132 32v32h16a16 16 0 000-32z"/></svg>
              Target Sales
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM48 96h352v64H48V96zm0 96h352v64H48v-64zm0 96h352v64H48v-64zm0 96h352v64H48v-64z"/></svg>
              Leads Database
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm88 272H272v72a16 16 0 01-32 0v-72h-72a16 16 0 010-32h72v-72a16 16 0 0132 0v72h72a16 16 0 010 32z"/></svg>
              Campaign Management
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 640 512"><path d="M480 32H160C71.64 32 0 103.6 0 192v192c0 88.4 71.64 160 160 160h320c88.36 0 160-71.6 160-160V192c0-88.4-71.64-160-160-160zM160 96h320c52.94 0 96 43.06 96 96v192c0 52.94-43.06 96-96 96H160c-52.94 0-96-43.06-96-96V192c0-52.94 43.06-96 96-96z"/></svg>
              Property Management
            </li>
  
            {/* Reporting */}
            <li className={Reporting ? "relative after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:border-l-2 after:border-white"  :" bottom-0 md:relative"}>
              <div onClick={()=>{setReporting(!Reporting)}} className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center justify-between">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M496 128h-80v192h80V128zM352 256h-80v64h80v-64zM208 320h-80v32h80v-32zM64 368h-32v16h32v-16z"/></svg>
                  Reporting
                </span>
                <motion.svg
                 animate={{rotate: Reporting ?180 :0}}
                className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512"><path d="M96 192l128 128 128-128z"/></motion.svg>
              </div>
            {Reporting && (
                  <ul className="ml-6 mt-1 space-y-1">
                  <li className="hover:bg-gray-800 px-3 py-1 rounded cursor-pointer">Sales Reporting</li>
                  <li className="hover:bg-gray-800 px-3 py-1 rounded cursor-pointer">Leads Reporting</li>
                </ul>
            )}
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M487.4 315.7L324.2 152.5a16 16 0 00-22.6 0l-25.6 25.6a16 16 0 000 22.6l38.1 38.1L136 417.2a96.1 96.1 0 00-53.4 53.4l-11.7 35.2a12.19 12.19 0 0015.3 15.3l35.2-11.7a96.1 96.1 0 0053.4-53.4l178.6-178.6 38.1 38.1a16 16 0 0022.6 0l25.6-25.6a16 16 0 000-22.6z"/></svg>
              User Management
            </li>
          </ul>
        </nav>
        </div>


{/* respnsive nav */}
        <div className="lg:hidden z-100 bg-gray-900 text-white flex flex-col text-sm">
          {/* dashboard reponsive */}
          <div       className={`w-[100%] md:w-1/2 h-[100%] bg-black fixed top-0 transition-all duration-300 ${
        reponsive_dashboard ? 'left-[0]' : 'left-[-100%]'
      }`}>
          <div className="px-6 py-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-amber-500">SAMANEA HILL</h1>
        </div>
  
          <ul className="space-y-1 p-4">
          <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M496 384h-16V208a24 24 0 00-24-24h-16V112a48 48 0 00-96 0v72h-64V96a48 48 0 00-96 0v88H64V80a48 48 0 00-96 0v336h128v-32a32 32 0 0132-32h64a32 32 0 0132 32v32h128v-32a32 32 0 0132-32h64a32 32 0 0132 32v32h16a16 16 0 000-32z"/></svg>
              Target Sales
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM48 96h352v64H48V96zm0 96h352v64H48v-64zm0 96h352v64H48v-64zm0 96h352v64H48v-64z"/></svg>
              Leads Database
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm88 272H272v72a16 16 0 01-32 0v-72h-72a16 16 0 010-32h72v-72a16 16 0 0132 0v72h72a16 16 0 010 32z"/></svg>
              Campaign Management
            </li>
  
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 640 512"><path d="M480 32H160C71.64 32 0 103.6 0 192v192c0 88.4 71.64 160 160 160h320c88.36 0 160-71.6 160-160V192c0-88.4-71.64-160-160-160zM160 96h320c52.94 0 96 43.06 96 96v192c0 52.94-43.06 96-96 96H160c-52.94 0-96-43.06-96-96V192c0-52.94 43.06-96 96-96z"/></svg>
              Property Management
            </li>
            <li className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center">
              <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M487.4 315.7L324.2 152.5a16 16 0 00-22.6 0l-25.6 25.6a16 16 0 000 22.6l38.1 38.1L136 417.2a96.1 96.1 0 00-53.4 53.4l-11.7 35.2a12.19 12.19 0 0015.3 15.3l35.2-11.7a96.1 96.1 0 0053.4-53.4l178.6-178.6 38.1 38.1a16 16 0 0022.6 0l25.6-25.6a16 16 0 000-22.6z"/></svg>
              User Management
            </li>
            </ul>
          </div>
        <nav className="fixed bottom-0  flex-1 overflow-y-auto bg-black w-[100%]">
          <ul className="space-y-1 p-4 flex justify-around items-center overflow-auto">
            <li onClick={()=>{setresponsive_dashboard(!reponsive_dashboard)}} className="click_dashboard hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex flex-col items-center">
              <svg className="w-5 h-5 mr-2 text-white-400" fill="currentColor" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0016 16l112-.29a16 16 0 0016-15.7V368a16 16 0 0116-16h64a16 16 0 0116 16v96a16 16 0 0016 15.72l112 .29a16 16 0 0016-16V300L295.67 148.26a12.19 12.19 0 00-15.3 0zM573.32 268.35L488 203.8V44a12 12 0 00-12-12h-56a12 12 0 00-12 12v72.61L318.47 43a48 48 0 00-61 0L2.61 268.35a12 12 0 00-1.6 17l25.5 31a12 12 0 0017 1.6L64 271.91V464a48 48 0 0048 48h112a48 48 0 0048-48v-96h64v96a48 48 0 0048 48h112a48 48 0 0048-48V271.9l20.9 17a12 12 0 0017-1.6l25.5-31a12 12 0 00-1.58-17z"/></svg>
              Dashboard
            </li>
  
            {/* Leads Management */}
            <li className="">

              <div
              onClick={()=>{setclick(click === 'leads'?null : "leads")}} className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center justify-between  ">
                <span className="flex items-center flex-col">
                  <svg  className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 640 512"><path d="M96 128a64 64 0 10128 0 64 64 0 10-128 0zm448 0a64 64 0 10128 0 64 64 0 10-128 0zM96 320a96 96 0 00-96 96v32a32 32 0 0032 32h192a32 32 0 0032-32v-32a96 96 0 00-96-96zm448 0a96 96 0 00-96 96v32a32 32 0 0032 32h192a32 32 0 0032-32v-32a96 96 0 00-96-96z"/></svg>
                  Leads Management
                </span>
                <motion.svg
                  animate={{rotate: click === 'leads' ?180 :0}}
                  transition={{type:"spring",duration:0.5}}
                className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512"><path d="M96 192l128 128 128-128z"/></motion.svg>
              </div>
              {click === 'leads' && (
                
                  <ul  
                  className="overflow-auto w-[100%] flex justify-between fixed left-0 p-1 bottom-25 bg-gray-700">
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">Leads Activity</li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">Lost Management</li>
                <li className="hover:bg-gray-800 p-2 rounded cursor-pointer">Import Leads</li>
              </ul>
              )}
            </li>
            {/* Reporting */}
            <li>
              <div onClick={()=>{setclick(click === 'Reporting'?null : "Reporting")}} className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer flex items-center justify-between">
                <span className="flex items-center flex-col">
                  <svg className="w-5 h-5 mr-2 color_li_icone" fill="currentColor" viewBox="0 0 512 512"><path d="M496 128h-80v192h80V128zM352 256h-80v64h80v-64zM208 320h-80v32h80v-32zM64 368h-32v16h32v-16z"/></svg>
                  Reporting
                </span>
                <motion.svg
                 animate={{rotate: click ==='Reporting' ?180 :0}}
                className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512"><path d="M96 192l128 128 128-128z"/></motion.svg>
              </div>
            {click ==='Reporting' && (
                  <ul className=" overflow-auto w-[100%] flex justify-around fixed left-0 p-1 bottom-25 bg-gray-700">
                  <li className="hover:bg-gray-800 p-2  rounded cursor-pointer">Sales Reporting</li>
                  <li className="hover:bg-gray-800 p-2  rounded cursor-pointer">Leads Reporting</li>
                </ul>
            )}
            </li>
  
          
          </ul>
        </nav>
        </div>
      </>
    );
  };
  
  export default Sidebar;
  