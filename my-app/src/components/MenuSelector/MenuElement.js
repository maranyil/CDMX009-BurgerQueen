import React from 'react'
import './MenuElement.css'

function MenuElement (props) {
    const {url, item, price, tag} = props.data
    const addProduct = props.addProduct
    return(
        <div className={tag === "drink" ? "beverage" : "meal"}
            onClick={() => addProduct(props.data)}
        >
            <img src={url} alt={item}></img>
            <h2>{item}</h2>
            <p>${price}.00</p>
        </div>
    )
}
    
export default MenuElement