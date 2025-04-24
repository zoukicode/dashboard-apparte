import './App.css'
import { lazy, Suspense, use, useEffect, useState } from "react";
import {Routes,Route} from 'react-router-dom'
import ErrorBoundary from "./ErrorBoundary";




function App() {
  const Graph = lazy(()=>import("./Graphe"))
const APP = lazy(()=>import("./App"))
const Erreur404 = lazy(() => import('./Erreur404'));
const Home = lazy(() => import('./Home'));

  return (
    <>
          <ErrorBoundary>
            <Suspense fallback={<div>Chargement...</div>}>
    <Routes>
      <Route path="*" element={<Erreur404 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Suspense>
</ErrorBoundary>
  

 
    </>
  )
}

export default App
