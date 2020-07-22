import React from 'react'

function Table ({tablenum, setTable}) {
    return(
        <>
            <h1>Mesa</h1>
            <input className="table-number"
                onChange={ e => {
                    const table = e.target.value; 
                    setTable(table)
                    console.log(table)
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