import React from 'react'
import './Square.css'
import { useDrop } from 'react-dnd'
import {move} from './Game'

const Square = ({children,colorValue, positionController}) => {
    //console.log(positionController)
    const [,drop]= useDrop({

      accept:'chess',
      drop:(item) => {
        const [fromPosition] = item.id.split('_')
        move(fromPosition,positionController)
      }
    })
  return (
    <div ref={drop} className={`${colorValue ? 'true' : 'false'} square`}>{children}</div>
  )
}

export default Square