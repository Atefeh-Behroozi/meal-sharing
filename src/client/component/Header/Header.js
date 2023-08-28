import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div>
        <nav>
        <a href="/">
          <div className="logo">
             MEAL SHARING
          </div>
        </a>
            <div>
                <Link to="/" style={{ color: '#226a49'}}>Home</Link>
            </div>
            <div>
                <Link to="/meals" style={{ color: '#226a49'}}>Meals</Link>
            </div>
            <div className='review'>
                <Link to={`/meals/:id/reviews`} style={{ color: '#226a49'}}><h4>Review</h4></Link>
            </div>
        </nav>
    </div>
);
    
            
  };
  
  export default Header;