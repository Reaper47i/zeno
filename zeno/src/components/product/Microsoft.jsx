import React from 'react'
import { SiMicrosoft } from 'react-icons/si'
import { Card } from '../layout/Card'
import { mobile_data } from '../data/DataItems'

const Microsoft = () => {
    return (
        <div className="microsoft" id="microsoft">
            <div className="microsoft-header"><div className="a-logo"><SiMicrosoft/></div><h1>Microsoft</h1></div>
            <div className="microsoft-content">
               {mobile_data.map((mobile)=>{
                   if(mobile.company === 'microsoft'){
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

export default Microsoft
