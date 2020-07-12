import React from 'react'

function ToggleMenu({ tab, setTab }) {
    return (
    <div>
        <button onClick={() => setTab('breakfast')} style={ { backgroundColor: tab === 'breakfast' ? 'blue' : 'gray' } }>Desayuno</button>
        <button onClick={() => setTab('restOttd')} style={ { backgroundColor: tab === 'restOttd' ? 'blue' : 'gray' } }>Comida</button>
    </div>
    )
}

export default ToggleMenu