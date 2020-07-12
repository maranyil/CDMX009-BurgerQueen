
import React from 'react'

import MenuSelector from '../components/MenuSelector'
import Navbar from '../components/Navbar'
import BMenu from '../components/Navbar/BMenu'
import Footer from '../components/Footer'

function NewOrder() {
    return(
    <div>
        <Navbar />
        <BMenu />
        <MenuSelector />
        <Footer /> 
    </div> 
    )
}

export default NewOrder