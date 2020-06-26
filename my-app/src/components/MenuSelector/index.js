import React, { useState } from 'react'
import breakfastData from '../../data/breakfastData'
import MenuElement from './MenuElement'

function MenuSelector() {
    const [order, setOrder] = useState([])

    const addProduct = (product) => {
        const orderTemp = [product, ...order];
        setOrder(orderTemp)
    }

    const breakfastComponents = breakfastData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem}/>
    )
    return(
    <>
        <div>{breakfastComponents}</div>
        <ul>
            {order.map((p) => <li>{JSON.stringify(p)}</li>)}
        </ul>
    </> 
    )
}

export default MenuSelector