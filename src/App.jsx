import { useState, useEffect } from 'react'

import Header from './Header';
import Board from './Board';
import Info from './Info';

import './App.css';

const App = () => {
  const [cells, setCells] = useState(new Array(9).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [winner, setWinner] = useState();

  useEffect(() => {
   if (hasWinner(cells)) {
    setWinner(!isPlayerOne ? 'X' : 'O');
   }  
  }, [isPlayerOne, cells])

  const handleCellClick = (targetIndex) => {
    setCells((prevCells) => {
      return prevCells.map((prevCell, index) => {
        return  index === targetIndex ? (isPlayerOne ? 'X' : 'O') : prevCell;
      });
    });

    setIsPlayerOne((prevIsPlayerOne) => { return !prevIsPlayerOne});
  }

  const handleBoardReset = () => {
    setCells(new Array(9).fill(null));
    setIsPlayerOne(true);
    setWinner(null); 
  }
  
  const hasWinner = (square) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const [a, b, c] of combinations) {
        if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
          console.log('has winner');
          return true;
        }
    }
    return false;
  };
  

  return (
      <div className='app'>
        <Header title={'Tic Tac Toe'} />
        <Board
          winner={winner}
          cells={cells}
          onClickCell={handleCellClick} 
        />
        <Info 
          winner={winner}
          cells={cells}
          isPlayerOne={isPlayerOne}
          onResetBoard={handleBoardReset}
        />
      </div>
  )
}

export default App