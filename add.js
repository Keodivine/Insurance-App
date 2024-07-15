// src/components/add.js
import React from 'react';
import './add.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';

const InsuranceApp = () => {
  return (
    <section className="featured-plans">
      
      <div className='fp'><h2>Featured Plans</h2></div>  <div className='explore-all'><h3>Explore All</h3></div>
      
     
      
      <div className="plans-grid">
        <div className="plan-card strategy">
        <p className='strtpln'>Strategy</p>
          <h3>Money Momentum</h3>
          <p>Tract Premium helps you start saver investments insights covering.</p><br></br>
          <p className="cagr">3 yrs CAGR</p>
          <p className="rate">7.20%</p>
           <a href="#" className='link-plans'>
        <FontAwesomeIcon icon={faCircleArrowRight} className="link-icon" size= "2x" />
      </a>
          

        </div>
        
        <div className="plan-card long">
        <p className='strtpln'>Plan</p>
          <h3>Long-Term</h3>
          <p>Create a vision. To get started, imagine your dream life.</p><br></br>
          <div className='line'></div>
          <p className="cagr">25 yrs CAGR</p>
          <p className="rate">14.20%</p>
          <a href="#" className='link-long'>
        <FontAwesomeIcon icon={faCircleArrowRight} className="link-icon"  size="2x"/>
      </a>
        </div>

        <div className="plan-card focussed">
        <p className='strtpln'>Strategy</p>
          <h3>Focussed</h3>
          <p>Be focused Life planning, however, can serve as a roadmap or guide.</p><br></br>
          <p className="cagr">1 yr returns</p>
          <p className="rate">11.20%</p>
          <a href="#" className='link-plans'>
        <FontAwesomeIcon icon={faCircleArrowRight} className="link-icon" size="2x" />
      </a>
        </div>

        <div className="plan-card plans">
        <p className='strtpln'>Plan</p>
          <h3>Fixed Income</h3>
          <p>Get multiple benefits, and lumpsum option & Guaranteed Returns</p><br></br>
          <p className="cagr">5 yrs CAGR</p>
          <p className="rate">8.20%</p>
          <a href="#" className='link-plans'>
        <FontAwesomeIcon icon={faCircleArrowRight} className="link-icon" size="2x" />
      </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceApp;
