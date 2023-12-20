import './App.css';
import {NavBar} from './Components/Navbar/NavBar.js'
import {Banner} from './Components/Banner/Banner.js'
import {Skills} from './Components/Skills/Skills.js'
import {Projects} from './Components/Projects/Projects.js'
import {Footer} from './Components/Footer/Footer.js'
import { Contact } from './Components/Contact/Contact.js';
import Certificates from './Components/Certificates/Certificates.js';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
<NavBar />
<Routes>

<Route path ='/' Component={Banner} />
<Route path='/skills' Component={Skills} />
<Route path='/projects' Component={Projects} />
<Route path='/contact' Component={Contact} />
<Route path='/certicates' Component={Certificates} />
</Routes>
{/* <Footer /> */}

    </div>
  );
}

export default App;
