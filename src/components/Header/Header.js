import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
     return (
          <header>
               <div className="container">
                    <div className="logo">
                         <img src={logo} alt="" />
                    </div>
               </div>
               <nav>
                    <div className="container">
                         <div className="menu">
                              <a href="/shop">Shop</a>
                              <a href="/order">Order Review</a>
                              <a href="/inventory">Manage Inventory here</a>
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Header;