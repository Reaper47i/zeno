import React from 'react'
import { SiApple } from 'react-icons/si'
import { mobile_data } from '../data/DataItems'
import { Card } from '../layout/Card'



const Apple = () => {   
    return (
        <div className='apple' id="apple" >
            <div className="apple-header" ><div className="a-logo"><SiApple/></div><h1>Apple</h1></div>
            <div className="apple-content">
               {mobile_data.map((mobile)=>{
                   if(mobile.company === 'apple'){
                       return(
                           <Card
                            key={mobile.id}
                            img={mobile.img}
                            title={mobile.title}
                            price={mobile.price}
                             />
                       )
                   }
               })}
            </div>
        </div>
    )
}

export default Apple
