import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { v4 as uuidv4 } from 'uuid'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Masonry from 'react-masonry-css'
import './Note.css'

// needed for toasts
toast.configure()

function KitchenNotes(){

    const [ incoming, setIncoming ] = useState([])

    const getOrders = () =>{
        return db
        .collection('orders')
        .where("status", "==", "in progress")
        .orderBy('date', 'desc')
        .onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setIncoming(docs)
        })
    } 

    useEffect(() => {
        let unsubscribe = getOrders()

        return () => {
            unsubscribe()
        }
      }, []);

    const updateOrder = (id) => {
        db    
        .collection('orders')
        .doc(id)
        .update({
            status: "done"
        })
        .then(() => {
            toast.success('Un meserx será notificado', {
                className: "rounder-edges",
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
                });
        })
        .catch(() =>{
            toast.error('Ocurrió un error, inténtalo de nuevo en un momento', {
                className: "rounder-edges",
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
                });
        })   
    }

    let incomingOrders = incoming.map( order => {
        let difference = Date.now() -  +order.date.toDate() // miliseconds between now and when the order was created
        let color = Math.round((difference/1000)/60)

        return (
            <div 
                className={color <= 5 ? "green-note" : color <=10 ? "orange-note" : "red-note"} 
                key={order.id}
            >
                <h2 className="table"> Mesa {order.table}</h2>
                <p> Meserx: {order.waiter}</p>

                    {order.items.map(product => {
                        return (
                            <div className="products-on-note" key={uuidv4()} >
                            <ul className="note-ul">
                                <li className="product-name">{product.item}</li>
                            </ul>
                                <p className="product-quantity">{product.quantity}</p>
                            </div>
                        )
                    })}
                    
                <button 
                    className={color <= 5 ? "green" : color <=10 ? "orange" : "red"}
                    onClick={() => {updateOrder(order.id)}}>
                        Orden lista!
                </button>
            </div>
        )
    })

    // breakpoints for responsive CSS Masonry
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
      };

    if (incoming.length <=0) {
        return (
            <div className="no-orders-message-container">
                <div className="no-orders-message"> Aún no hay ordenes :-) </div> 
            </div>
        )
    } else{
    return(
        <div className='container'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {incomingOrders}
            </Masonry>
        </div>
    )
}
}

export default KitchenNotes