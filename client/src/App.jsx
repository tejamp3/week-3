import React from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './page/Home'
import Truck from './page/Truck'
import Signup from './auth/Signup'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route   path="/"   element={<Home/>}  />
      <Route   path="/truck"   element={<Truck/>}  />
      <Route   path="/signup"   element={<Signup/>}  />
    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App