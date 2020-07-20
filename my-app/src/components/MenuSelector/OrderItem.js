import React from 'react'
import trash from '../../img/trash.svg'
import './OrderItem.css'

function OrderItem ({item, price, id, deleteItem, addQuantity, quantity, totalp}) {

    return(
        <div className="order-list-container">   
            <h3>{item}</h3>
            <input
              type="number" min="1"
              value={quantity}
              onChange={(e)=> {
                const quantity = e.target.value
                addQuantity(id, quantity)
            }}/>
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