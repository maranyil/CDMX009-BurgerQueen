import React from 'react'
import MenuElement from '../MenuSelector/MenuElement'
import breakfastData from '../../data/breakfastData'

function BreakfastMenu (){
    return( breakfastData.map(elem =>
        <MenuElement data={elem} key={elem.id}/>
    )
    )
}

export default BreakfastMenu