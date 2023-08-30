import Cell from './Cell';
import { useTicTacToeContext } from '../contexts/TicTacToeContext';


const Board = () => {
  const {
    cells,
    handleCellClick
  } = useTicTacToeContext();

  const renderCell = (i) => {
    return (
      <Cell
        value={cells[i]}
        onClickCell={() => { handleCellClick(i) }}
      />
    ) 
  }
  return (
    <div className='game'>
      <div className='game-board'>
        <div className='board-row'>
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
        <div className='board-row'>
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
        <div className='board-row'>
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </div>
    </div>
  )
}

export default Board