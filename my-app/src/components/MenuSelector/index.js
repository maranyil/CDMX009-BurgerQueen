import React, { useState } from 'react'
import breakfastData from '../../data/breakfastData'
import restOfTheDayData from '../../data/restOfTheDayData'
import MenuElement from './MenuElement'
import ToggleMenu from './ToggleMenu'
import OrderItem from './OrderItem'
import './index.css'

function MenuSelector() {

    const [order, setOrder] = useState([])
    const [tab, setTab] = useState('breakfast')

    const addProduct = (product) => {
        const orderTemp = [product, ...order];
        setOrder(orderTemp)
        console.log(product)
    }

    const restOtdComponents = restOfTheDayData.map(elem =>
    <MenuElement addProduct={addProduct} data={elem} key={elem.id} />
    )

    const breakfastComponents = breakfastData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id}/>
    )

    const orderTest = order.map(elem =>
        <OrderItem item={elem.item} price={elem.price} key={elem.id}/>
    )


    return(
    <>
        <ToggleMenu setTab={setTab} tab={tab}/>
        {tab === 'breakfast' ? <div className="menuContainer">{breakfastComponents}</div> :
        <div className="menuContainer">{restOtdComponents}</div>
        }

       {orderTest}
    </> 
    )
}

export default MenuSelector