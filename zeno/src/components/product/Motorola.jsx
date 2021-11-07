import React from 'react'
import { Card } from '../layout/Card'
import { mobile_data } from '../data/DataItems'
import { SiMotorola } from 'react-icons/si'

const Motorola = () => {
    return (
        <div className="motorola" id="motorola">
            <div className="motorola-header"><div className="a-logo"><SiMotorola/></div><h1>Motorola</h1></div>
            <div className="motorola-content">
               {mobile_data.map((mobile)=>{
                   if(mobile.company === 'motorola'){
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

export default Motorola
