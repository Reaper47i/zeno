import React, { useEffect, useState } from 'react'
import {GiStripedSun} from 'react-icons/gi'
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const[mobile, setMobile] = useState(false);
    const[nav, setNav] = useState(false);

    useEffect(()=>{
        if(window.innerWidth < 768){
            setMobile(true)
        }
    },[]);

    useEffect(()=>{
      const handleResize = () => {
          if(window.innerWidth < 768){
              setMobile(true)
          }else{
              setMobile(false)
          }
      };
        
        window.addEventListener('resize', handleResize);
        return()=>{
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    return (
            <div className="navbar">
                <div className="main_bar">
                    <div className="left">
                        <div className="logo">
                            <Link to="/"><GiStripedSun/></Link>
                        </div>
                        <h1>ZENO</h1>
                    </div>
                    { !mobile && (<div className="right">
                            <ul>
                                <Link to="/product">Products</Link>
                                <Link to="/cart">Cart</Link>
                                <Link to="about">About</Link>
                                <li>Login</li>
                            </ul>
                        </div>)     
                    }
                    {
                        mobile && (
                            <div className="sidebars">
                                { nav ? (
                                   <MdClose onClick={ ()=> setNav(!nav) }/>
                                ):(
                                    <FaBars onClick={ ()=> setNav(!nav) } />
                                )}
                            </div>
                        )
                    }
                </div>
                
                
                { mobile && nav && (
                    <div className='navbox'>
                    <ul className="ul-nav" >
                        <Link to="/product" onClick={()=> setNav(!nav)}>Products</Link>
                        <Link to="/cart" onClick={()=> setNav(!nav)}>Cart</Link>
                        <Link to="about" onClick={()=> setNav(!nav)}>About</Link>
                        <li>Login</li>
                    </ul>
                </div>
                )
                }
                
                
            </div>
            
       
    )
}

export default Navbar