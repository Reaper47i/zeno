import React, { useState, useEffect } from 'react'
import AparelMen from '../product/apparels/men/AparelMen';
import AparelWomen from '../product/apparels/women/AparelWomen';
import Apple from '../product/Apple';
import Microsoft from '../product/Microsoft';
import Motorola from '../product/Motorola';
import Oneplus from '../product/Oneplus';
import Samsung from '../product/Samsung';
import {BsLaptop,BsSmartwatch} from 'react-icons/bs';
import {GiSmartphone,GiClothes,GiDress,GiTShirt} from 'react-icons/gi';
import { SiApple,SiMotorola,SiOneplus,SiSamsung,SiMicrosoft } from 'react-icons/si'

 





const Products = () => {
     const [click1, setClick1] = useState(false);
     const[click2, setClick2] = useState(false);
     const[click3, setClick3] = useState(false);
     const[click4, setClick4] = useState(false);
    const[navSize, setNavSize] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 1024){
            setNavSize(true)
        }
    }, [])

    useEffect(() => {
        const navDisplay = ()=>{
            if(window.innerWidth < 1024){
                setNavSize(true)
            }else{
                setNavSize(false)
            }
        }
        window.addEventListener('resize', navDisplay);
        return () => {
            window.removeEventListener('resize', navDisplay)
        }
    }, [])


     return (
         <div className="product">
             <div className="product-nav">
                <ul>
                    <li onClick={()=>setClick1(!click1)}>{navSize ?  <div className="nav-sm-logo"><GiSmartphone/><BsLaptop/></div> :'Mobiles/Laptops'}</li>
                    {click1 && (
                            <div className='nav-menu'>
                            <ul className="ul_menu">  
                                <li className="li_menu"> <a href="#apple">{navSize ? <SiApple/> : 'Apple'}</a></li>
                                <li className="li_menu_samsung"><a href="#samsung">{navSize ? <SiSamsung/> : 'Samsung'}</a></li>
                                <li className="li_menu"><a href="#oneplus">{navSize ? <SiOneplus/> : 'Oneplus'}</a></li>
                                <li className="li_menu"><a href="#motorola">{navSize ? <SiMotorola/> : 'Motorola'}</a></li>
                                <li className="li_menu"><a href="#microsoft">{navSize ? <SiMicrosoft/> : 'Microsoft'}</a></li>
                            </ul>
                        </div>
                        )}
                    <li onClick={()=>setClick4(!click4)}>{ navSize ? <div className="nav-sm-logo"><GiClothes/></div> : 'Clothing'}</li>
                    {click4 && (
                        <div className="nav-menu">
                           <ul className="ul_menu-father">
                                <li className="li_menu-M" onClick={()=> setClick2(!click2)}>{ navSize ? <div className="nav-sm-logo"><GiTShirt/></div> : 'Men'}</li>
                                    {click2 &&(
                                        <div className='nav-menu'>
                                            <ul className="ul_menu">  
                                                <li className="li_menu_cloth"> <a href="#peterEngland-men">Peter England</a></li>
                                                <li className="li_menu_cloth"><a href="#allenSolly-men">Allen Solly</a></li>
                                                <li className="li_menu_cloth"><a href="#h&m-men">H & M</a></li>
                                                <li className="li_menu_cloth"><a href="#adidas-men">Adidas</a></li>
                                            </ul>
                                        </div>
                                    )}

                                
                                <li className="li_menu-W" onClick={()=>setClick3(!click3)}>{navSize ? <div className="nav-sm-logo"><GiDress/></div> : 'Women'}</li>
                                {click3 && (
                                    <div className='nav-menu'>
                                        <ul className="ul_menu">  
                                            <li className="li_menu_cloth"> <a href="#nike-women">Nike</a></li>
                                            <li className="li_menu_cloth"><a href="#handm-women">H & M</a></li>
                                            <li className="li_menu_cloth"><a href="#nykaa">Nykaa</a></li>
                                        </ul>
                                    </div>
                                )}            
                            </ul> 
                        </div>
                    )}
                    
                    <li>{navSize ? <div className="nav-sm-logo"><BsSmartwatch/></div> : 'Accesories'}</li>
                </ul>
             </div>
             <div className="product-container">
                <Apple/>
                <Samsung/>
                <Oneplus/>
                <Motorola/>
                <Microsoft/>
                <AparelMen/>
                <AparelWomen/>
             </div>
             
             
         </div>
     )
 }
 
 export default Products
 