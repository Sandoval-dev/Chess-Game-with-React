import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'

const SquareBoard = ({ brd, positionController }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'chess',
    item: { id: `${positionController}_${brd.type}_${brd.color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging }
    }
  })

  const pieceImage = require(`../public/assets/images/${brd.type}_${brd.color}.svg`)
  console.log(brd)
  return (
    <div ref={drag}>
      <DragPreviewImage src={pieceImage} connect={preview} />

      <img src={pieceImage} style={{ width: "70px" }} />
    </div>
  )
}

export default SquareBoard