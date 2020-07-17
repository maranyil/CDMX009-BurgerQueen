import React, { useState } from 'react'
import breakfastData from '../../data/breakfastData'
import restOfTheDayData from '../../data/restOfTheDayData'
import MenuElement from './MenuElement'
import ToggleMenu from './ToggleMenu'
import OrderItem from './OrderItem'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid'
import './index.css'

function MenuSelector() {

    const [order, setOrder] = useState([])
    const [tab, setTab] = useState('breakfast')

    const addProduct = (product) => {
        const orderTemp = [{
            ...product,
            quantity: 1,
        }, ...order];
        setOrder(orderTemp)

        console.log(order)
    }

    const deleteItem = (id) => {
        setOrder(order.filter(order => order.id !== id ))
        console.log('me voy a borrar noo' + id)
    }

    const restOtdComponents = restOfTheDayData.map(elem =>
    <MenuElement addProduct={addProduct} data={elem} key={elem.id} />
    )

    const breakfastComponents = breakfastData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id}/>
    )

    const addQuantity = (id, quantity) => {
        const newOrder = order.map((item) => {
            if (item.id === id) {
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

    const fullOrder = order.map(elem =>
        <OrderItem

            item={elem.item} 
            price={elem.price} 
            key={uuidv4()} 
            id={elem.id} 
            quantity={elem.quantity}
            deleteItem={deleteItem} 
            addQuantity={addQuantity} />
    )

    const addTotal = order.reduce((result, item) => {
        return result + item.price * item.quantity
    }, 0)


    return(
    <div className="menuSelectorContainer">
        <ToggleMenu className="toggle-btn" setTab={setTab} tab={tab}/>
        {tab === 'breakfast' ? <div className="menuContainer">{breakfastComponents}</div> :
        <div className="menuContainer">{restOtdComponents}</div>
        }

        <div className="orderContainer">
        <h1>Mesa</h1>
        {fullOrder}
        <p className="total">Total: ${addTotal}.00</p>
        <div className="center"><Button 
            color={'yellow'}
            title={"Enviar a cocina"}
        />
        </div>
        </div>
    </div> 
    )
}

export default MenuSelector