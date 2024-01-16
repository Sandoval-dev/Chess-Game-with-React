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
  return (
    <div className='Board'>
        {
            board.flat().map((brd,i) => (
                <Square colorValue={colorController(i)}>
                  { brd &&  <SquareBoard brd={brd}/>}
                </Square>

            ))
        }
    </div>
  )
}

export default Board