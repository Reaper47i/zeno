import React, { useState } from 'react';
import {FiChevronsRight, FiChevronsLeft} from 'react-icons/fi'
import { carousel_data } from '../../data/DataItems';

const Carousel = () => {
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
        <div className="carousel" style={{ backgroundImage:`url(${carousel_data[currImg].img})` }} >
               <div className="mvleft">
                   <FiChevronsLeft onClick={left} cursor="pointer" />
               </div>
               <div className="title"><p>{carousel_data[currImg].title}</p></div>
               <div className="mvright">
                   <FiChevronsRight onClick={right} cursor="pointer" />
               </div>
           </div>
    )
}

export default Carousel
