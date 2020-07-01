import React, { useState } from 'react'
import breakfastData from '../../data/breakfastData'
import restOfTheDayData from '../../data/restOfTheDayData'
import MenuElement from './MenuElement'
import ToggleMenu from './ToggleMenu'
import './index.css'

function MenuSelector() {

    let menu = true 
    const [order, setOrder] = useState([])

    const addProduct = (product) => {
        const orderTemp = [product, ...order];
        setOrder(orderTemp)
    }

    const restOtdComponents = restOfTheDayData.map(elem =>
    <MenuElement addProduct={addProduct} data={elem} key={elem.id} />
    )

    const breakfastComponents = breakfastData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id}/>
    )

    return(
    <>
        <ToggleMenu />
        {menu === false ? <div className="menuContainer">{breakfastComponents}</div> :
        <div className="menuContainer">{restOtdComponents}</div>
        }
      
        <ul>
            {order.map((p) => <li>{JSON.stringify(p)}</li>)}
       </ul>
    </> 
    )
}

export default MenuSelector