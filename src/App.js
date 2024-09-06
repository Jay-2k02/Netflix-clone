import './App.css';
import axios from 'axios';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowposter from './Components/Rowposters/Rowposter';
import { API_KEY } from './Constants/constants';
import { action, comedy, originals } from './urls';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { navigateContext } from './Constants/constants';
function App() {
const navigate = useNavigate()
  return (
    <navigateContext.Provider value={navigate}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </navigateContext.Provider>
  );
}

export default App;
