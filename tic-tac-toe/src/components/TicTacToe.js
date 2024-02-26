// "use client"
// import { useState } from 'react';

// const TicTacToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   const handleClick = (index) => {
//     const newBoard = [...board];
//     if (calculateWinner(newBoard) || newBoard[index]) return;
//     newBoard[index] = xIsNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setXIsNext(!xIsNext);
//   };

//   const renderSquare = (index) => {
//     return (
//       <button className="square" onClick={() => handleClick(index)}>
//         {board[index]}
//       </button>
//     );
//   };

//   const winner = calculateWinner(board);
//   let status;
//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board">
//         <div className="board-row">
//           {renderSquare(0)}
//           {renderSquare(1)}
//           {renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {renderSquare(3)}
//           {renderSquare(4)}
//           {renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {renderSquare(6)}
//           {renderSquare(7)}
//           {renderSquare(8)}
//         </div>
//       </div>
//     </div>
//   );
// };

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// };

// export default TicTacToe;


// "use client"
// import React, { useState } from 'react';

// const TicTacToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   const handleClick = (index) => {
//     const newBoard = [...board];
//     if (calculateWinner(newBoard) || newBoard[index]) return;
//     newBoard[index] = xIsNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setXIsNext(!xIsNext);
//   };

//   const renderSquare = (index) => {
//     return (
//       <button className="square" onClick={() => handleClick(index)}>
//         {board[index]}
//       </button>
//     );
//   };

//   const winner = calculateWinner(board);
//   let status;

//   if (winner) {
//     status = 'Winner: ' + winner;
//   } else {
//     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//   }

//   return (
//     <div className="wrapper">
//       <div className="content">
//         <div className="status">{status}</div>
//         <div className="board">
//           <div className="board-row">
//             {renderSquare(0)}
//             {renderSquare(1)}
//             {renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {renderSquare(3)}
//             {renderSquare(4)}
//             {renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {renderSquare(6)}
//             {renderSquare(7)}
//             {renderSquare(8)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// };

// export default TicTacToe;


"use client"
import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(newBoard) || newBoard[index]) return;
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;

  if (winner) {
    status = '🎉 Winner: ' + winner;
  } else if (board.every(square => square)) {
    status = '😐 It\'s a draw!';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="wrapper">
      <div className="content">
        <h1 className="text-4xl font-bold mb-6">Tic Tac Toe</h1>
        <div className="status text-xl mb-6">{status}</div>
        <div className="board grid grid-cols-3 gap-4">{Array.from({ length: 9 }, (_, i) => renderSquare(i))}</div>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
