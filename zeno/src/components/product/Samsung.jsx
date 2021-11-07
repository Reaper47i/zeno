import React from 'react'
import { SiSamsung } from 'react-icons/si'
import { mobile_data } from '../data/DataItems'
import { Card } from '../layout/Card'




const Samsung = () => {
    return (
        <div className="samsung" id="samsung">
            <div className="samsung-header"><SiSamsung/></div>
            <div className="samsung-content">
               {mobile_data.map((mobile)=>{
                   if(mobile.company === 'samsung'){
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

export default Samsung
