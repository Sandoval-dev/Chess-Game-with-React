import React from 'react'
import SquareBoard from './SquareBoard'
import Square from './Square'
import './Board.css'

const Board = ({board}) => {
    //console.log(board.flat())

    const colorController = (i) => {
        const x= i%8;
        const y=Math.abs(Math.floor(i/8)- 7)
        return (x+y)%2===0
    }

    const positionController = (i) => {
      const x= i%8;
      const letters=["a", "b", "c", "d", "e", "f","g","h"][x]
      const y=Math.abs(Math.floor(i/8)- 7)
      return `${letters}${y+1}`
    }
  return (
    <div className='Board'>
        {
            board.flat().map((brd,i) => (
                <Square colorValue={colorController(i)} positionController={positionController(i)}>
                  { brd &&  <SquareBoard brd={brd} positionController={positionController(i)}/>}
                </Square>

            ))
        }
    </div>
  )
}

export default Board