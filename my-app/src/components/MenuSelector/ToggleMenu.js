import React from 'react'

function ToggleMenu({ tab, setTab }) {
    return (
    <div>
        <button onClick={() => setTab('breakfast')} style={ { backgroundColor: tab === 'breakfast' ? 'gray' : 'blue' } }>Desayuno</button>
        <button onClick={() => setTab('restOttd')} style={ { backgroundColor: tab === 'restOttd' ? 'gray' : 'blue' } }>Comida</button>
    </div>
    )
}

export default ToggleMenu