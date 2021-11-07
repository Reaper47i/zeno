import React from 'react'
import { CardCl } from '../../../layout/Card'
import { aparel_data } from '../../../data/DataItems'


const AparelWomen = () => {
    return (
        <div className="clothes-women">
            <div className="nike-women" id="nike-women">
            <div className="clothes-header"><img src='../../../../../images/logo/nike.png' alt="Nike" /></div>
                <div className="clothes-content">
                    {aparel_data.map((aparel)=>{
                        if(aparel.gender === 'women' && aparel.company === 'nike'){
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
            <div className="handm-women" id="handm-women">
                <div className="clothes-header"><img src='../../../../../images/logo/h&m.png' alt="H&M" /></div>
                <div className="clothes-content">
                        {aparel_data.map((aparel)=>{
                            if(aparel.gender === 'women' && aparel.company === 'h&m'){
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
            <div className="nykaa-women" id="nykaa">
            <div className="clothes-header"><img src='../../../../../images/logo/nykaa.png' alt="H&M" /></div>
                <div className="clothes-content">
                        {aparel_data.map((aparel)=>{
                            if(aparel.gender === 'women' && aparel.company === 'nykaa'){
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

export default AparelWomen
