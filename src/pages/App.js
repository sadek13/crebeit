import '../css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import Pusher from 'pusher-js';
import Learnhome from './Learnhome';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';

import Quot from './Quot';
import Contact from './Contact';



import '../css/crebeit.css'
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
