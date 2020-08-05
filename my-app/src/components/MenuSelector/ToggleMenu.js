import React from 'react'
import './ToggleMenu.css'

function ToggleMenu({ tab, setTab }) {

    return (
    <div className="toggle-container">
        <button 
            className="toggle"
            onClick={() => setTab('breakfast')}  
            style={
                { backgroundColor: tab === 'breakfast' ? '#FFF' : '#DED2FF',
                  fontWeight: tab === 'breakfast' ? 'bold' : 'normal',
                  fontSize: tab === 'breakfast' ? '26px' : '25px'
                }
            }>
            Desayuno
        </button>
        <button 
            className="toggle"
            onClick={() => setTab('restOttd')}
            style={{ backgroundColor: tab === 'restOttd' ? '#FFF' : '#DED2FF',
                     fontWeight: tab === 'restOttd' ? 'bold' : 'normal',
                     fontSize: tab === 'restOttd' ? '26px' : '25px'
                    }
            }>
            Comida
        </button>
    </div>
    )
}

export default ToggleMenu