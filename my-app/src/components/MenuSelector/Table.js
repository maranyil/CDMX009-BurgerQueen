import React from 'react'

function Table () {
    return(
        <>
            <h1>Mesa</h1>
            <input className="table-number"
                type="number" 
                min="1"
                max="8"
             />
        </>
    )
}

export default Table