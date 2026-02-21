// import { useState } from 'react'
//import viteLogo from '/img/vite.svg'
//import './shared/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from "./features/layout/components/header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import {Props} from './features/layout/components/Props'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Header></Header>
     <Routes>
  <Route path="/" element={<Content />} />
  <Route path="/props" element={<Props />} />
  <Route path="/articulos" element={<Content />} />
     </Routes>
     <Footer></Footer>

    </BrowserRouter>
  </>
    
  )
}

export default App
