import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
