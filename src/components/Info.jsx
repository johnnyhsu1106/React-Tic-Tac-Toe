import React, { useMemo } from 'react'
import { useTicTacToeContext } from '../contexts/TicTacToeContext';

const Info = () => {
  const {
    status,
    handleBoardReset
  } = useTicTacToeContext();


  return (
    <div className='game-info'>
      <p> {status} </p>
      <button className='reset' onClick={handleBoardReset}>
        Restart
      </button>    
    </div>
  );
}

export default Info