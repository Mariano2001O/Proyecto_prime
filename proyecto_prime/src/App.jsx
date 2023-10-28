import './App.css'

//theme
import "primereact/resources/themes/Soho-Dark/theme.css";

//react router
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

//Navbar
import { Navbar } from './components/Navbar';

//Sidebar
import  BarralLeft  from './components/BarralLeft';
import BarralRight from './components/BarralRight';

//Footer
import { Footer } from './components/Footer';

//Pages
import { Home } from './Pages/Home';
import { First } from "./Pages/First";
import { Second } from './Pages/Second';


function App() {
  return (
    <>
      <Navbar/>

        <Router>
            <Routes>
                <Route exact path='/' Component={Home}/>
                <Route path='/pagina1' Component={First}/>
                <Route path='/pagina2' Component={Second}/>
            </Routes>
        </Router>


      
      <div>

      <BarralLeft/>
      <BarralRight/>
      
      </div>


      <Footer/>

      </>
  )
}
export default App