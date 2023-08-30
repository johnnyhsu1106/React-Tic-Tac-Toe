import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const TicTacToeContext = createContext();

const useTicTacToeContext = () => {
  return useContext(TicTacToeContext);
};

const hasWinner = (cells) => {
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
      return true;
    }
  }
  return false;
};


const TicTacToeProvider = ({ children }) => {
  const [cells, setCells] = useState(new Array(9).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
   if (hasWinner(cells)) {
    setWinner(!isPlayerOne ? 'X' : 'O');
   }  
  }, [cells]);


  const status = useMemo(() => {
    if (winner) {
      return `The winner is ${winner}`;
    } 
    if (cells.indexOf(null) === -1)  {
      return 'Click button to restart a new game.' ;
    } 
    return `Next player: ${isPlayerOne ? 'X' : 'O'}`;

  }, [winner, isPlayerOne])


  const handleCellClick = (targetIndex) => {
    setCells((prevCells) => {
      return prevCells.map((prevCell, index) => {
        return  index === targetIndex ? (isPlayerOne ? 'X' : 'O') : prevCell;
      });
    });

    setIsPlayerOne((prevIsPlayerOne) => { return !prevIsPlayerOne });
  };

  const handleBoardReset = () => {
    setCells(new Array(9).fill(null));
    setIsPlayerOne(true);
    setWinner(null); 
  };
  

  const context = {
    winner,
    status,
    cells,
    isPlayerOne,
    handleCellClick,
    handleBoardReset
  };

  return (
    <TicTacToeContext.Provider value={context}>
      {children}
    </TicTacToeContext.Provider>
  )
}

export { useTicTacToeContext, TicTacToeProvider}