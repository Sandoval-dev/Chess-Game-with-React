import React from 'react'

const SquareBoard = ({brd}) => {
    const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.svg`)
    console.log(brd)
  return (
    <div>
        <img src={pieceImage} />
    </div>
  )
}

export default SquareBoard