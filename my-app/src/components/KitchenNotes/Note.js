import React, { useState, useEffect } from 'react'
import { db, auth } from '../../firebase'
import { v4 as uuidv4 } from 'uuid'
import './Note.css'

function Note(){

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
            console.log(docs)
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
            alert('un meserx será notificado :)')
        })
        .catch(() =>{
            alert('Ocurrió un error, intentalo de nuevo en un momento')
        })   
    }

    return(
        <div className="note-container">
            {incoming.map(order => {
                return (
                    <div className="notes" key={order.id}>
                        <h2 className="table"> Mesa {order.table}</h2>
                        <p> Meserx: {order.waiter}</p>
                        {order.items.map(product => {
                            return (
                                <div key={uuidv4()} >
                                    <p>{product.item}</p>
                                    <p>{product.quantity}</p>
                                </div>
                            )
                        })}
                        <button className="green" onClick={() => {console.log(order); updateOrder(order.id)}}>Orden lista!</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Note