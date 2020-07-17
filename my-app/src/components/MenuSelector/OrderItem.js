import React from 'react'
import trash from '../../img/trash.svg'

function OrderItem ({item, price, id, deleteItem, addQuantity, quantity}) {

    return(
        <div>   
            <h2>{item}</h2>
            <input
              type="number" min="1"
              value={quantity}
              onChange={(e)=> {
                const quantity = e.target.value
                addQuantity(id, quantity)
            }}/>
            <h2>${price}.00</h2>
            <img src={trash} onClick={() => deleteItem(id)}/> 
        </div>
    )
}

export default OrderItem