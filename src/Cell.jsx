const Cell = ({ winner, value, onClickCell }) => {
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