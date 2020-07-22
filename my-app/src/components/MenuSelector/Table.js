import React from 'react'

function Table ({tablenum}) {
    return(
        <>
            <h1>Mesa</h1>
            <input className="table-number"
                onChange={ e => {
                    const tablenum = e.target.value; 
                    console.log(tablenum)
                    } 
                }
                type="number" 
                min="1"
                max="8"
             />
        </>
    )
}

export default Table