import React from 'react'
import {GrApple} from 'react-icons/gr'
import {SiOneplus} from 'react-icons/si'
import {TiVendorMicrosoft} from 'react-icons/ti'
import {SiSamsung} from 'react-icons/si'
import { mobile_data } from '../../data/DataItems'


const Mobile_section = () => {
    return (
        <div className="mobile_section">
            <div className="mobile-header">Latest Collection of Smartphones and Laptops</div>
            <div className="mobile-content">
                <div >
                    <GrApple/>
                        {mobile_data.map((mobile)=>{
                            if(mobile.company === 'apple' && mobile.id < 3){
                                return(
                                    <div key={mobile.id} ><img src={mobile.img} alt={mobile.title} /></div>
                                )
                            }
                            
                        })}                    
                </div>
                <div >
                    <SiOneplus/>
                    {mobile_data.map((mobile)=>{
                        if(mobile.company ==='oneplus render'){
                            return(
                                <div key={mobile.id}><img src={mobile.img} alt={mobile.title} /></div>
                            )
                        }
                    })}
                </div>
                <div >
                    <TiVendorMicrosoft/>
                    {mobile_data.map((mobile)=>{
                        if(mobile.company === 'microsoft'){
                            return(
                                <div key={mobile.id}><img src={mobile.img} alt={mobile.title} /></div>
                            )
                        }
                    })}
                </div>
                <div >
                    <SiSamsung/>
                    {mobile_data.map((mobile)=>{
                        if(mobile.company === 'samsung' && mobile.id < 20){
                            return(
                                <div key={mobile.id}><img src={mobile.img} alt={mobile.title} /></div>
                            )
                        }
                    })}
                </div>    
            </div>
        </div>
        
    )
}

export default Mobile_section
