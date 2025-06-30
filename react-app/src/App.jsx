import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from '../src/pages/Home';
import Contact from '../src/pages/Contact';
import About from '../src/pages/About';
import Career from '../src/pages/Career';
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  )
}

export default App
