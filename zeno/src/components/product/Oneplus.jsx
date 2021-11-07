import React from 'react'
import { SiOneplus } from 'react-icons/si'
import { mobile_data } from '../data/DataItems'
import { Card } from '../layout/Card'



const Oneplus = () => {
    return (
        <div className="oneplus" id="oneplus">
            <div className="oneplus-header"><div className="a-logo"><SiOneplus/></div><h1>Oneplus</h1></div>
            <div className="oneplus-content">
               {mobile_data.map((mobile)=>{
                   if(mobile.company === 'oneplus'){
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

export default Oneplus
