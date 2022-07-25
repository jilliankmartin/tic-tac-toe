import Board from './components/board/Board';
import Score from './components/score/Score';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Board></Board>
      <Score></Score>
    </div>
  );
}

export default App;
