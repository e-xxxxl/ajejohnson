import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const getStoredScores = () => {
    const saved = localStorage.getItem("ttt-scores");
    return saved ? JSON.parse(saved) : { player: 0, ai: 0, draw: 0 };
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [scores, setScores] = useState(getStoredScores);

  const checkWinner = (b) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let [a,b1,c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  };

  const isDraw = (b) => b.every(cell => cell !== null);

  const minimax = (newBoard, isMaximizing) => {
    const winner = checkWinner(newBoard);

    if (winner === "O") return 1;
    if (winner === "X") return -1;
    if (isDraw(newBoard)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      newBoard.forEach((cell, i) => {
        if (!cell) {
          newBoard[i] = "O";
          let score = minimax(newBoard, false);
          newBoard[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      });
      return bestScore;
    } else {
      let bestScore = Infinity;
      newBoard.forEach((cell, i) => {
        if (!cell) {
          newBoard[i] = "X";
          let score = minimax(newBoard, true);
          newBoard[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      });
      return bestScore;
    }
  };

  const bestMove = (b) => {
    let bestScore = -Infinity;
    let move;

    b.forEach((cell, i) => {
      if (!cell) {
        b[i] = "O";
        let score = minimax(b, false);
        b[i] = null;

        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    });

    return move;
  };

  const updateScores = (result) => {
    const newScores = { ...scores };

    if (result === "X") newScores.player += 1;
    else if (result === "O") newScores.ai += 1;
    else newScores.draw += 1;

    setScores(newScores);
    localStorage.setItem("ttt-scores", JSON.stringify(newScores));
  };

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);

    setTimeout(() => {
      const aiMove = bestMove(newBoard);
      if (aiMove !== undefined) {
        newBoard[aiMove] = "O";
        setBoard([...newBoard]);
      }
      setIsPlayerTurn(true);
    }, 400);
  };

  useEffect(() => {
    const winner = checkWinner(board);

    if (winner) updateScores(winner);
    else if (isDraw(board)) updateScores("draw");
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  const resetScores = () => {
    const reset = { player: 0, ai: 0, draw: 0 };
    setScores(reset);
    localStorage.setItem("ttt-scores", JSON.stringify(reset));
  };

  const winner = checkWinner(board);

  return (
    <div className="tic-tac-toe-section ">

      <div className=" fun-text mb-20">
          <h3 className=" text-3xl md:text-3xl font-bold tracking-tight text-white mb-4">
            fun
          </h3>
          <p className="text-gray-400 text-lg font-light;">
            all work and no play makes emmanuel a dull boy
          </p>
        </div>
    <div style={{
      textAlign: "center",
      color: "#fff",
      fontFamily: "sans-serif",
      marginTop: "150px"
    }}>
      <h2 style={{ marginBottom: "10px" }}>Tic Tac Toe</h2>

      <div style={{ marginBottom: "15px", fontSize: "14px", opacity: 0.8 }}>
        Player: {scores.player} | AI: {scores.ai} | Draw: {scores.draw}
      </div>

      <p style={{ marginBottom: "15px" }}>
        {winner
          ? `Winner: ${winner}`
          : isDraw(board)
          ? "Draw!"
          : isPlayerTurn
          ? "Your Turn"
          : "AI Thinking..."}
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gap: "8px",
        justifyContent: "center"
      }}>
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "80px",
              height: "80px",
              border: "1px solid orange",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8rem",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#111"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            {cell}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={resetGame}
          style={{
            padding: "6px 14px",
            border: "1px solid orange",
            background: "transparent",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Restart
        </button>

        <button
          onClick={resetScores}
          style={{
            padding: "6px 14px",
            border: "1px solid orange",
            background: "transparent",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Reset Score
        </button>
      </div>
    </div>
    </div>
  );
};

export default TicTacToe;