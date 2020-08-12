import React, { useState, useEffect} from 'react'
import { db } from '../../firebase'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid'
import Masonry from 'react-masonry-css'

toast.configure()

function Ready () {

    const [ready, setReady] = useState([])

    const getDoneOrders = () => {
        return db
        .collection('orders')
        .where("status", "==", "done")
        .orderBy('date', 'desc')
        .onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            })
            setReady(docs)
        })
    }

    useEffect(() => {
        let unsubscribe = getDoneOrders()

        return () => {
            unsubscribe()
        }
    }, [])

    //  deletes the order from firestore 
    const deleteOrder = (id) => {
        db
        .collection('orders')
        .doc(id)
        .delete()
        .then(() => {
            toast.success('Pedidos actualizados', {
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
        .catch(() => {
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

    let readyOrders = ready.map( order => {
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
                    onClick={() => { deleteOrder(order.id) }}>
                        Orden entregada!
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

      if (ready.length <=0) {
        return (
            <div className="no-orders-message-container">
                <div className="no-orders-message"> Aún no hay pedidos para entregar :-) </div> 
            </div>
        )
    } else{
    return(
        <div className='container'>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {readyOrders}
            </Masonry>
        </div>
    )
}
}

export default Ready; 