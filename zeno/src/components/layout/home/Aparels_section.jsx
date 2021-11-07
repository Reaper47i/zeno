import React from 'react'
import { aparel_data } from '../../data/DataItems'

const Aparels_section = () => {
    return (
        <div className="h-aparels">
            <div className="aparel-header">CUSTOMIZE YOURSELF WITH THE LATEST TRENDS</div>
            <div className="aparel-content">
                {aparel_data.map((aparel)=>
                    <div key={aparel.id} style={{ backgroundImage:`url(${aparel.img})` }}></div>
                    
                )}
            </div>
        </div>
    )
}

export default Aparels_section
