import './App.css'

//import { useState } from 'react';

//theme
import "primereact/resources/themes/Soho-Dark/theme.css";

//react router
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

//Navbar
import { Navbar } from './components/Navbar';

//Footer
import { Footer } from './components/Footer';

//Sidebar
import  BarralLeft  from './components/BarralLeft';
import BarralRight from './components/BarralRight';

function App() {
  return (
    <>

        <Router>
            <Routes>
                <Route path='/'>Inicio</Route>
                <Route path='/first'>Acerca de</Route>
                <Route path='/second'>Ubicacion</Route>
            </Routes>
        </Router>

      <Navbar/>

      <h1>Diseño Santo grial</h1>
      
      <div>

      <BarralLeft/>
      <BarralRight/>
      
      </div>


      <Footer/>

      </>
  )
}
export default App