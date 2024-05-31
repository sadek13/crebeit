import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';

import Home from './pages/Home';
import Navbar from './pages/Navbar';
import About from './pages/About';

import Quot from './pages/Quot';
import Contact from './pages/Contact';



import './css/crebeit.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
   


      <div className="Content">
        <Navbar />

        <Switch>
         

          <Route path="/About">
            <About />
          </Route>
        
          <Route path="/Quotation">
            <Quot />
          </Route>
          
          <Route path="/Contact-Us">
            <Contact />
          </Route>

        

          <Route path="/">
            <Home />
          </Route>

    
      

        </Switch>
      </div>
    </Router>

  );
}

export default App;
