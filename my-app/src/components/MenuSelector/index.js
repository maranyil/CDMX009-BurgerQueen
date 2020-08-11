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
import { db } from '../../firebase'
import './index.css'

function MenuSelector() {
    //  nodes 
    const initialValues = {
        table: '',
        items: [],
        waiter: 'Keupa',
        date: new Date(), 
        status: 'in progress'
    }

    const [tab, setTab] = useState('breakfast')
    const [order, setOrder] = useState(initialValues)

    // functions 
  
    const setTable = (table) => setOrder({ ...order, table})

     //adds product to order
    const addProduct = (product) => {        
        setOrder({
            ...order,
            items: [
                ...order.items,
                {...product, quantity: 1}
            ]
        })
    }

    const deleteItem = (id) => {
        setOrder({
            ...order,
            items: order.items.filter(order => order.id !== id )            
        })
    }

    const restOtdComponents = restOfTheDayData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id} />
    )

    const breakfastComponents = breakfastData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id}/>
    )

    const addQuantity = (id, quantity) => {
        const newItems = order.items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity,
                }
            } else {
                return item
            }
        })
        setOrder({
            ...order,
            items: newItems,
        })
    }

    const saveOrder = async () => {
        await db
        .collection('orders')
        .add(order)
        alert('pedido enviado a cocina')
        setOrder({...initialValues})
    }

    const fullOrder = order.items.map(elem =>
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

    const addTotal = order.items.reduce((result, item) => {
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
                <Table setTable={setTable} />
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