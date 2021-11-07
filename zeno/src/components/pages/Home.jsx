import React, { useState } from 'react'
import Aparels_section from '../layout/home/Aparels_section'
import Carousel from '../layout/home/Carousel'
import Mobile_section from '../layout/home/Mobile_section'


const Home = () => {
        
    return (

        <div className="home">
           <Carousel/>
           <Mobile_section/>
           <Aparels_section/>
        </div>
    )
}

export default Home
