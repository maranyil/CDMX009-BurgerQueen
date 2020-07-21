import React, { useState } from 'react'
import breakfastData from '../../data/breakfastData'
import restOfTheDayData from '../../data/restOfTheDayData'
import MenuElement from './MenuElement'
import ToggleMenu from './ToggleMenu'
import OrderItem from './OrderItem'
import Titles from './Titles'
import Table from './Table'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid'
import { db, auth } from '../../firebase'
import './index.css'

function MenuSelector() {


    const [order, setOrder] = useState([])
    const [tab, setTab] = useState('breakfast')

    /**
     * order []
     * order {table: 1, total: 5000, subtotal: 4000, tax: 1000, client: 'Raul', items: [{id:1, name: 'hamg 1', price: 20, quantity: 3 }]}
     */

     //ads product to order
    const addProduct = (product) => {
            const orderTemp = [{
                ...product,
                quantity: 1,
            }, ...order];
                    setOrder(orderTemp)
    }

    const deleteItem = (id) => {
        setOrder(order.filter(order => order.id !== id ))
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

    const saveOrder = (e) => {
        e.preventDefault()
        db
        .collection('orders')
        .add({
            order
        })
        .then(()=>{
            alert('Pedido enviado a cocina :)')
        })
    }

    const fullOrder = order.map(elem =>
        <OrderItem
            item={elem.item} 
            price={elem.price} 
            totalp={elem.price * elem.quantity}
            key={uuidv4()} 
            id={elem.id} 
            quantity={elem.quantity}
            deleteItem={deleteItem} 
            addQuantity={addQuantity} 
        />
    )

    const addTotal = order.reduce((result, item) => {
        return result + item.price * item.quantity
    }, 0)


    return(
    <div className="menu-parent">
       <div className="menu-container" >
        <ToggleMenu 
            className="toggle-btn" 
            setTab={setTab} 
            tab={tab}
        />

        {tab === 'breakfast' ? <div className="items-container">{breakfastComponents}</div> :
            <div className="items-container">{restOtdComponents}</div>
        }
       </div> 

        <div className="order-container">
        <div className="order-note">
            <div className="table">
                <Table />
            </div> 
            <Titles /> 
            {fullOrder}
            <p className="total">Total: ${addTotal}.00</p>
            <div className="center">
                <Button 
                color={'yellow'}
                title={"Enviar a cocina"}
                saveOrder={saveOrder}
            />
            </div>
        </div>
        </div>
    </div> 
    )
}

export default MenuSelector