import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopeee <i class="fa fa-bolt 3x" aria-hidden="true"></i></Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;