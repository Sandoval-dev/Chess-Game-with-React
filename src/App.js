import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Board from './Board';
import { useEffect, useState } from 'react';
import subjectGame, { initGame } from './Game'

function App() {

  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    initGame()
    const subscribe = subjectGame.subscribe(sub => {
      setBoard(sub.chess)
      setIsGameOver(sub.isGameOver)
      setResult(sub.result)
    })

    return () => subscribe.unsubscribe();
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='bg-black h-screen flex items-center justify-center relative'>
        {
          isGameOver && <div className='absolute bg-white bg-opacity-80 rounded-lg p-3 items-center justify-center'>

            <h1 className='font-bold text-center'>OYUN BİTTİ!!</h1>
            {result && <div className=''>{result}</div>}
          </div>
        }
        <Board board={board} />
      </div>
    </DndProvider>

  );
}

export default App;
