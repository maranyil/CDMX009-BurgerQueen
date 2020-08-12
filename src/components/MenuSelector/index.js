
import React, { useState, useContext } from 'react'
import breakfastData from '../../data/breakfastData'
import restOfTheDayData from '../../data/restOfTheDayData'
import MenuElement from './MenuElement'
import ToggleMenu from './ToggleMenu'
import OrderItem from './OrderItem'
import Titles from './Titles'
import Table from './Table'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { db } from '../../firebase'
import { AuthContext } from '../../Auth'
import './index.css'

toast.configure()

function MenuSelector() {

    const user = useContext(AuthContext)
    let currentWaiter = user.currentUser.displayName

    //  nodes 
    const initialValues = {
        table: '',
        items: [],
        waiter: currentWaiter,
        date: new Date(), 
        status: 'in progress'
    }

    const [tab, setTab] = useState('breakfast')
    const [order, setOrder] = useState(initialValues)

    // functions 
    const setTable = (table) => { 
        table = parseInt(table)
        setOrder({ ...order, table })
    }

    const addProduct = (product) => {
        if (order.items.find(item => item.id === product.id)) {
           // order.items.map( item => item.id === product.id )
        } else{
            setOrder({
                ...order,
                items: [
                    ...order.items,
                    {...product, quantity: 1}
                ]
            })
        }
    }

    const deleteItem = (id) => {
        setOrder({
            ...order,
            items: order.items.filter(order => order.id !== id )            
        })
    }

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

    const addTotal = order.items.reduce((result, item) => {
        return result + item.price * item.quantity
    }, 0)

    const saveOrder = async() =>{
        if(order.items.length >0 && order.table <= 0){
            toast.warn('Por favor asigna la mesa', {
                className: "rounder-edges",
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                transition: Slide
                });
        }else if(order.items.length === 0 && order.table >= 1){
            toast.warn('Agrega al menos un producto a la orden 🍔', {
                className: "rounder-edges",
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                transition: Slide
                });
        }else if (order.items.length === 0 && order.table <= 0){
            toast.warn('Asigna la mesa y productos a la orden 🍔🍟', {
                className: "rounder-edges",
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                transition: Slide
                });
        }else{
            await db
            .collection('orders')
            .add(order)
            setOrder({...initialValues})
            toast.success('Pedido enviado a cocina! ✨', {
                className: "rounder-edges",
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                transition: Slide
                });
        }
    }

    // prints the lunch components 
    const restOtdComponents = restOfTheDayData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id} />
    )
    
    // prints the breakfast components
    const breakfastComponents = breakfastData.map(elem =>
        <MenuElement addProduct={addProduct} data={elem} key={elem.id}/>
    )

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
            { order.items.length === 0 ? ( <div className="center-align"> No hay productos en la orden</div> ) : ( order.items.map(elem =>
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
            ) )}
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