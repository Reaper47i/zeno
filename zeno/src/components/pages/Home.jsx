import React, { useState } from 'react'
import { carousel_data } from '../data/DataItems'
import {FiChevronsRight, FiChevronsLeft} from 'react-icons/fi'

const Home = () => {
    
    const[currImg, setCurrImg] = useState(0);
    
    const left = ()=>{
        if(currImg > 0){
            setCurrImg(currImg - 1);
        }
    }
    const right = ()=>{
        if(currImg < (carousel_data.length - 1)){
            setCurrImg(currImg + 1);
        }
    }

    
    return (

        <div className="home">
           <div className="carousel" style={{ backgroundImage:`url(${carousel_data[currImg].img})` }} >
               <div className="mvleft">
                   <FiChevronsLeft onClick={left} />
               </div>
               <div className="title"><p>{carousel_data[currImg].title}</p></div>
               <div className="mvright">
                   <FiChevronsRight onClick={right} />
               </div>
           </div>
        </div>
    )
}

export default Home
