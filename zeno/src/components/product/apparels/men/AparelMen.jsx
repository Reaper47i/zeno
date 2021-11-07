import React from 'react'
import { aparel_data } from '../../../data/DataItems'
import { CardCl } from '../../../layout/Card'

const AparelMen = () => {
    return (
        <div className="clothes-men">
            <div className="peter-eng-men" id="peterEngland-men">
                <div className="clothes-header"><img src='../../../../../images/logo/peterEngland.png' alt="Peter England" /></div>
                <div className="clothes-content">
                    {aparel_data.map((aparel)=>{
                        if(aparel.gender === 'men' && aparel.company === 'peter england'){
                            return(
                                <CardCl
                                    key={aparel.id}
                                    img={aparel.img}
                                    title={aparel.title}
                                    price={aparel.price}
                                />
                            )
                        }
                    })}

                </div>
            </div>
            <div className="allenSolly-men" id="allenSolly-men">
            <div className="clothes-header"><img src='../../../../../images/logo/allensolly.png' alt="Allen Solly" /></div>
                <div className="clothes-content">
                    {aparel_data.map((aparel)=>{
                        if(aparel.gender === 'men' && aparel.company === 'allen solly'){
                            return(
                                <CardCl
                                    key={aparel.id}
                                    img={aparel.img}
                                    title={aparel.title}
                                    price={aparel.price}
                                />
                            )
                        }
                    })}

                </div>
            </div>
            <div className="HandM-men" id="h&m-men">
            <div className="clothes-header"><img src='../../../../../images/logo/h&m.png' alt="H&M" /></div>
                <div className="clothes-content">
                    {aparel_data.map((aparel)=>{
                        if(aparel.gender === 'men' && aparel.company === 'h&m'){
                            return(
                                <CardCl
                                    key={aparel.id}
                                    img={aparel.img}
                                    title={aparel.title}
                                    price={aparel.price}
                                />
                            )
                        }
                    })}

                </div>
            </div>
            <div className="adidas-men" id="adidas-men">
            <div className="clothes-header"><img src='../../../../../images/logo/Adidas.png' alt="Adidas" /></div>
                <div className="clothes-content">
                    {aparel_data.map((aparel)=>{
                        if(aparel.gender === 'men' && aparel.company === 'adidas'){
                            return(
                                <CardCl
                                    key={aparel.id}
                                    img={aparel.img}
                                    title={aparel.title}
                                    price={aparel.price}
                                />
                            )
                        }
                    })}

                </div>
            </div>
        </div>
        
    )
}

export default AparelMen
