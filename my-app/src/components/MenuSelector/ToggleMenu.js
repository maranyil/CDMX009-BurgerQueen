import React from 'react'
import './ToggleMenu.css'

function ToggleMenu({ tab, setTab }) {
    return (
    <div className="container">
        <button 
            className="toggle"
            onClick={() => setTab('breakfast')}  
            style={{ backgroundColor: tab === 'breakfast' ? '#FFF' : '#FFD89C' }}>
            Desayuno
        </button>
        <button 
            className="toggle"
            onClick={() => setTab('restOttd')}
            style={{ backgroundColor: tab === 'restOttd' ? '#FFF' : '#FFD89C' }}>
            Comida
        </button>
    </div>
    )
}

export default ToggleMenu