import Container from './components/Container';
import Header from './components/Header';
import Board from './components/Board';
import Info from './components/Info';
import { TicTacToeProvider } from './contexts/TicTacToeContext';
import './App.css';

const App = () => {
  
  

  return (
      <TicTacToeProvider>
        <Container>
          <Header title='Tic Tac Toe' />
          <Board />
          <Info />
        </Container>
      </TicTacToeProvider>
  )
}

export default App