import React, { } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';


import InsuranceApp from './Component/add';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">Lyf-)<span>insurance@tiropay.au</span></div>
          
          <div className="navbar-buttons">
            <button className="btn">Log In</button>
            <button className="btn btn-primary">Get Started</button>

          </div>

          <div className="hamburger" >
            <div className="line"></div>
            <div className="line"></div>
            
          </div>
        </nav>
       
        <div className="hero-section">
          <h1>Life Planning, Making<br></br> Easy to Turn Dreams a Reality.</h1>
          <p>Get Exclusive offers on purchase of any plans</p>
          <div className="email-signup">
            <input type="email" placeholder="Your Email" size="10px"/>
            <button className="btn btn-signup">Sign Up</button>
          </div>
        </div>
      </header>
      <main>
        <InsuranceApp />
      </main>

<br></br>
<br></br>
      <footer>
        <p>Terms Policy • Customer Story</p>
        <a href="#" className='link-footer'>
        <FontAwesomeIcon icon={faCircleArrowRight} className="link-icon" size= "2x" /></a>
      </footer>
    </div>
  );
}

export default App;
