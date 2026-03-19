import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const getStoredScores = () => {
    const saved = localStorage.getItem("ttt-scores");
    return saved ? JSON.parse(saved) : { player: 0, ai: 0, draw: 0 };
  };

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameStarter, setGameStarter] = useState("player");
  const [scores, setScores] = useState(getStoredScores);
  const [message, setMessage] = useState("Your turn");
  const [showMessage, setShowMessage] = useState(false);

  // Professional, subtle humor messages
  const humorMessages = {
    playerWin: [
      "Well played",
      "Impressive move",
      "Good game",
      "You've got skills",
      "Nice strategy",
    ],
    aiWin: [
      "AI wins — you should hire me",
      "The machine prevails — hire me",
      "AI takes this round — interested in working together?",
      "Victory for the algorithm — let's build something",
      "AI wins — I'm available for freelance",
    ],
    draw: [
      "A balanced game",
      "Well contested",
      "Evenly matched",
      "Good defense on both sides",
      "A fair result",
    ],
    playerTurn: [
      "Your move",
      "Your turn",
      "Thinking...",
      "The board is yours",
      "Make your play",
    ],
    aiTurn: [
      "AI thinking",
      "Processing...",
      "Calculating move",
      "AI's turn",
      "Analyzing options",
    ],
  };

  const getRandomMessage = (category) => {
    const messages = humorMessages[category];
    return messages[Math.floor(Math.random() * messages.length)];
  };

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

    if (result === "X") {
      newScores.player += 1;
      setMessage(getRandomMessage("playerWin"));
    } else if (result === "O") {
      newScores.ai += 1;
      setMessage(getRandomMessage("aiWin"));
    } else {
      newScores.draw += 1;
      setMessage(getRandomMessage("draw"));
    }

    setScores(newScores);
    localStorage.setItem("ttt-scores", JSON.stringify(newScores));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleClick = (index) => {
    if (!isPlayerTurn || board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
    setMessage(getRandomMessage("aiTurn"));

    setTimeout(() => {
      const winner = checkWinner(newBoard);
      if (!winner && !isDraw(newBoard)) {
        const aiMove = bestMove(newBoard);
        if (aiMove !== undefined) {
          newBoard[aiMove] = "O";
          setBoard([...newBoard]);
        }
        setIsPlayerTurn(true);
        setMessage(getRandomMessage("playerTurn"));
      } else {
        setIsPlayerTurn(true);
      }
    }, 500);
  };

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      updateScores(winner);
    } else if (isDraw(board)) {
      updateScores("draw");
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    
    if (gameStarter === "player") {
      setIsPlayerTurn(false);
      setGameStarter("ai");
      setMessage("AI starts");
      
      setTimeout(() => {
        const newBoard = Array(9).fill(null);
        const aiFirstMove = bestMove(newBoard);
        if (aiFirstMove !== undefined) {
          newBoard[aiFirstMove] = "O";
          setBoard(newBoard);
          setIsPlayerTurn(true);
          setMessage(getRandomMessage("playerTurn"));
        }
      }, 400);
    } else {
      setIsPlayerTurn(true);
      setGameStarter("player");
      setMessage(getRandomMessage("playerTurn"));
    }
  };

  const resetScores = () => {
    const reset = { player: 0, ai: 0, draw: 0 };
    setScores(reset);
    localStorage.setItem("ttt-scores", JSON.stringify(reset));
    setMessage("Scores reset");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const winner = checkWinner(board);

  return (
    <section id="fun" className="bg-black py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            fun
          </h2>
          <p className="text-gray-500 text-lg font-light border-l-2 border-orange-500/50 pl-4">
            all work and no play makes emmanuel a dull boy
          </p>
        </div>

        {/* Message toast - subtle */}
        <div className={`
          fixed top-24 left-1/2 transform -translate-x-1/2 z-50
          transition-all duration-500
          ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}>
          <div className="bg-gray-900 border border-gray-800 rounded-lg px-5 py-2.5 shadow-xl">
            <p className="text-orange-500/90 text-sm font-light">{message}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-16 lg:gap-24">
          {/* Game Board - Minimal */}
          <div className="w-full max-w-md">
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <h3 className="text-white font-light tracking-wide">Tic Tac Toe</h3>
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-gray-500 text-xs mb-1">YOU</div>
                    <div className="text-white font-medium">{scores.player}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-xs mb-1">AI</div>
                    <div className="text-white font-medium">{scores.ai}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-500 text-xs mb-1">DRAW</div>
                    <div className="text-white font-medium">{scores.draw}</div>
                  </div>
                </div>
              </div>

              {/* Turn indicator */}
              <div className="text-center mb-6">
                <span className="text-sm text-gray-400 font-light">
                  {winner
                    ? `Winner: ${winner === 'X' ? 'Player' : 'AI'}`
                    : isDraw(board)
                    ? "Draw"
                    : isPlayerTurn
                    ? "Your turn (X)"
                    : "AI turn (O)"}
                </span>
              </div>

              {/* Game Grid */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {board.map((cell, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(index)}
                    disabled={!isPlayerTurn || cell !== null || winner !== null}
                    className={`
                      aspect-square
                      bg-gray-900/50
                      border border-gray-800
                      hover:border-orange-500/30
                      transition-all duration-200
                      flex items-center justify-center
                      text-2xl font-light
                      ${cell === 'X' ? 'text-orange-500' : cell === 'O' ? 'text-blue-500' : ''}
                      ${!isPlayerTurn || cell || winner ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    {cell}
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex gap-3">
                <button
                  onClick={resetGame}
                  className="flex-1 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-sm text-gray-300 transition-all duration-200"
                >
                  New Game
                </button>
                <button
                  onClick={resetScores}
                  className="flex-1 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-sm text-gray-300 transition-all duration-200"
                >
                  Reset Scores
                </button>
              </div>
            </div>
          </div>

          {/* Info Panel - Minimal */}
          <div className="w-full max-w-sm">
            <div className="space-y-4">
              <div className="bg-gray-900/30 p-5 rounded-lg border border-gray-800">
                <h4 className="text-orange-500/90 text-sm font-medium mb-2 tracking-wide">
                  GAME STATUS
                </h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {winner
                    ? winner === 'X' 
                      ? getRandomMessage('playerWin')
                      : getRandomMessage('aiWin')
                    : isDraw(board)
                    ? getRandomMessage('draw')
                    : isPlayerTurn
                    ? getRandomMessage('playerTurn')
                    : getRandomMessage('aiTurn')}
                </p>
              </div>

              <div className="bg-gray-900/30 p-5 rounded-lg border border-gray-800">
                <h4 className="text-blue-500/90 text-sm font-medium mb-2 tracking-wide">
                  FIRST MOVE
                </h4>
                <p className="text-gray-400 text-sm font-light">
                  {gameStarter === "player" ? "You start" : "AI starts"} — alternates each round
                </p>
                <div className="mt-3 h-px w-full bg-gray-800">
                  <div className={`h-px w-1/2 bg-orange-500/50 transition-transform duration-500 ${
                    gameStarter === "player" ? "translate-x-0" : "translate-x-full"
                  }`} />
                </div>
              </div>

              <div className="bg-gray-900/30 p-5 rounded-lg border border-gray-800">
                <h4 className="text-gray-400 text-sm font-medium mb-2 tracking-wide">
                  ABOUT
                </h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  This AI uses the minimax algorithm — the same logic that powers chess engines. 
                  {scores.ai > scores.player && scores.ai > 0 && (
                    <span className="block mt-2 text-orange-500/70">
                      AI is winning. Perhaps we should work together?
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicTacToe;