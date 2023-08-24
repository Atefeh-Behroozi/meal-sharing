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
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/meals">Meals</Link>
            </div>
            <div>
                <Link to="/meals">Review</Link>
            </div>
        </nav>
    </div>
);
    
            
  };
  
  export default Header;