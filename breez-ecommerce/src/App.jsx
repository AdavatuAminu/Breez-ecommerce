import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Collection from './components/Collection';
import Men from './components/Men';
import Women from './components/Women';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/collection'element={<Collection />} />
      <Route path='/men'element={<Men />} />
      <Route path='/women'element={<Women />} />
      <Route path='/about'element={<About />} />
      <Route path='/contact'element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
