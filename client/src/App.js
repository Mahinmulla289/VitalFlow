import React from 'react'
import Home from './pages/Home'
import Bookappointment from './pages/Bookappointment'
import Donate from './pages/Donate'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import SmarteyeNews from './components/SmarteyeNews';
import AppleLaunch from './components/AppleLaunch';
import WindowsUpdate from './components/WindowsUpdate';
import './App.css';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookappointment" element={<Bookappointment />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/" element={<Home />} />
          <Route path="/smarteye-news" element={<SmarteyeNews />} />
          <Route path="/apple-launch" element={<AppleLaunch />} />
          <Route path="/windows-update" element={<WindowsUpdate />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App