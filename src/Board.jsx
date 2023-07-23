import Cell from './Cell'

const Board = ({ winner, cells,  onClickCell }) => {
  const renderCell = (i) => {
    return (
      <Cell
        winner={winner}
        value={cells[i]}
        onClickCell={() => {onClickCell(i)}}
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