import React, { useEffect, useState } from 'react'
import Note from './Note'
import { db, auth } from '../../firebase'

function KitchenNotes () {

    const [ note, setNote ] = useState([])

    useEffect(() => {
      }, []);

    return(
        <>
            <Note />
            <Note />
            <Note />
        </>
    )

}

export default KitchenNotes