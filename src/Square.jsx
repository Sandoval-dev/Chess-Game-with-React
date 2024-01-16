import React from 'react'
import './Square.css'

const Square = ({children,colorValue}) => {
    console.log(colorValue)
  return (
    <div className={`${colorValue ? 'true' : 'false'} square`}>{children}</div>
  )
}

export default Square