import React from 'react'
import trash from '../../img/trash.svg'

function OrderItem ({item, price}) {

    const deleteItem = () => {
        console.log('me voy a borrar noo')
    }

    return(
        <div>   
            <h2>{item}</h2>
            <input type="number" />
            <h2>${price}.00</h2>
            <img src={trash} onClick={deleteItem}/> 
        </div>
    )
}

export default OrderItem