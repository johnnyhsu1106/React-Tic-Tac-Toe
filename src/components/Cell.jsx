import { useTicTacToeContext } from '../contexts/TicTacToeContext';


const Cell = ({ 
  value, 
  onClickCell 
}) => {
  const { winner } = useTicTacToeContext();

  return (
    <button
      disabled={winner || value ? true : false}
      className='cell'
      onClick={onClickCell}
    >
      {value}
    </button>
  );
}

export default Cell;