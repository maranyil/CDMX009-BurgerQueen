import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuSelector from '../components/MenuSelector'

import './NewOrder.css'

function NewOrder() {
    return(
    <div>
        <Navbar />
        <MenuSelector />
        <Footer /> 
    </div> 
    )
}

export default NewOrder