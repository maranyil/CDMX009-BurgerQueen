import React from 'react'
import trash from '../../img/trash.svg'
import './OrderItem.css'

function OrderItem ({item, price, id, deleteItem, quantity, addQuantity, totalp}) {

    return(
        <div className="order-list-container">   
            <h3>{item}</h3>
            <div className="quantity-wrapper">
                <button 
                    className="plusminus"
                    onClick={() => {addQuantity(id, quantity -1)}}
                    >
                        -
                </button>
                <span>{quantity}</span>
                <button 
                    className="plusminus"
                    onClick={() => {addQuantity(id, quantity +1)}}
                >
                    +
                </button>
            </div>
            <h4>${price}.00</h4>
            <h4>${totalp}.00</h4>
            <img 
                src={trash} 
                alt="delete-icon"
                className="trash"
                onClick={() => deleteItem(id)}
            /> 
        </div>
    )
}

export default OrderItem