import React from 'react'

const Info = ({ winner, onResetBoard, isPlayerOne, cells }) => {
  let status;

  if (winner) {
    status = <span className='winner'> The winner is {winner}</span>;
  } else if (cells.indexOf(null) === -1)  {
    status = 'Click button to restart a new game.' ;
  } else {
    status = `Next player: ${isPlayerOne ? 'X' : 'O'}`;
  }

  return (
    <div className='game-info'>
      <p> {status} </p>
      <button className='reset' onClick={onResetBoard}>
        Restart
      </button>    
    </div>
  );
}

export default Info