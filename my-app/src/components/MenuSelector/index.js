import React, { useState } from 'react'
import breakfastData from '../../data/breakfastData'
import restOfTheDayData from '../../data/restOfTheDayData'
import MenuElement from './MenuElement'
import ToggleMenu from './ToggleMenu'
import OrderItem from './OrderItem'
import { v4 as uuidv4 } from 'uuid'
import './index.css'

function MenuSelector() {

    const [order, setOrder] = useState([])
    const [tab, setTab] = useState('breakfast')
    const [total, setTotal] = useState([

    ])

    const addProduct = (product) => {
        const orderTemp = [{
            ...product,
            quantity: 1,
        }, ...order];
        setOrder(orderTemp)
        console.log(product)
    }

    const deleteItem = (id) => {
        setOrder(order.filter(order => order.id !== id ))
        console.log('me voy a borrar noo' + id)
    }

    const addTotal = (cost, quantity) => {

    }

    const restOtdComponents = restOfTheDayData.map(elem =>
    <MenuElement addProduct={addProduct} data={elem} key={elem.id} />
    )

    const breakfastComponents = breakfastData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id}/>
    )

    const addQuantity = (id, quantity) => {
        const newOrder = order.map((item) => {
            if (item.id === id && quantity >= 1) {
                return {
                    ...item,
                    quantity,
                }
            } else {
                return item
            }
        })
        setOrder(newOrder)
    }

    const orderTest = order.map(elem =>
        <OrderItem

            item={elem.item} 
            price={elem.price} 
            key={uuidv4()} 
            id={elem.id} 
            quantity={elem.quantity}
            deleteItem={deleteItem} 
            addQuantity={addQuantity} />
    )

    const totalCuenta = order.reduce((result, elem) => {
        return result + elem.price * elem.quantity
    }, 0)

    return(
    <>
        <ToggleMenu setTab={setTab} tab={tab}/>
        {tab === 'breakfast' ? <div className="menuContainer">{breakfastComponents}</div> :
        <div className="menuContainer">{restOtdComponents}</div>
        }

       {orderTest}

       <p>{totalCuenta}</p>
    </> 
    )
}

export default MenuSelector