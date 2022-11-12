import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//importing components
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import GettingStarted from "./components/GettingStarted";
import Rewards from "./components/Rewards";
import Support from "./components/Support";
import Faq from "./components/Faq";



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' element={  <Landing /> } /> 
        <Route path='/dashboard' element={  <Dashboard /> } /> 
        <Route path='/gettingstarted' element={  <GettingStarted /> } />  
        <Route path='/rewards' element={ <Rewards /> } />  
        <Route path='/support' element={ <Support /> } />   
        <Route path='/faq' element={ <Faq /> } /> 
        </Routes>
      </div>
    </Router >
  )
}

export default App