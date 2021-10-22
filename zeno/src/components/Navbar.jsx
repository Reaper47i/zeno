import React from 'react'
import {GiStripedSun} from 'react-icons/gi'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <Link to="/"><GiStripedSun/></Link>
                </div>
                <h1>ZENO</h1>
            </div>
            <div className="right">
                <ul>
                    <Link to="/product">Products</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="about">About</Link>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar