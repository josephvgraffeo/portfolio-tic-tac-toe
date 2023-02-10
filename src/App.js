import React, {useState} from 'react';
import { Board } from "./components/Board.jsx"
import { Scoreboard } from './components/Scoreboard.jsx';
import { ResetButton } from './components/ResetButton.jsx';
import { ResetScoreBoard } from './components/ResetScoreBoard';
import { Footer } from './components/Footer.jsx';
import { WinnerModal } from './components/Winner.jsx';
import "./app.css"


function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(""));
  const [xPlayer, setXPlayer] = useState(true);
  const [scores, setScores] = useState({xScore:0, oScore:0});
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (boxIndex) => {
    const updatedBoard = [...board];
    updatedBoard[boxIndex] = xPlayer? "X" : "O";

  const winner = checkForWinner(updatedBoard);

  const oWinner = checkForWinner(updatedBoard);
    if (winner === "O") {
      let oScore = scores.oScore + 1;
      alert("O Player Wins!")
      setScores({...scores, oScore});
    }

  const xWinner = checkForWinner(updatedBoard);
    if (winner === "X") {
      let xScore = scores.xScore + 1;
      alert("X Player Wins!")
      setScores({...scores, xScore});
    }

    setBoard(updatedBoard);
    setXPlayer(!xPlayer);

  }


  const checkForWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameOver(true);
        return board[a];
      }
    }
  }

  const resetGame = () => {
    setGameOver(false);
    setXPlayer(true);
    setBoard(Array(9).fill(""));
  }

  const resetScore = () => {
    setScores({xScore: 0, oScore: 0})
    resetGame()
    setXPlayer(true);
  };

  return (
    <div className="App">
      <Scoreboard scores={scores} setXPlayer={xPlayer}/>
      <Board board={board} onClick={gameOver ? resetGame : handleClick}/>
      <ResetButton  resetGame={resetGame}/>
      <ResetScoreBoard scores={scores} resetScore={resetScore} />
      <Footer />
    </div>
  );
}

export default App;
