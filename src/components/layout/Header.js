import React from 'react';
import logo from './unicorn.jpg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src={logo} alt="unicorn"></img>
            <h1>TodoList</h1>
            <Link className="header-link" to="/">Home</Link> | <Link className="header-link" to="/about">About</Link>
        </header>
    )
}

export default Header;