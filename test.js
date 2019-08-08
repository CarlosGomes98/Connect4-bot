const Board = require('./board.js');

let board = new Board(5, 6);
board.makeMoveAndCheckWin(2, 0);
board.makeMoveAndCheckWin(2, 0);
board.makeMoveAndCheckWin(2, 0);
board.makeMoveAndCheckWin(1, 0);
board.makeMoveAndCheckWin(2, 1);
board.makeMoveAndCheckWin(2, 1);
board.makeMoveAndCheckWin(1, 1);
board.makeMoveAndCheckWin(2, 2);
board.makeMoveAndCheckWin(1, 2);
console.log(board.makeMoveAndCheckWin(1, 3));
console.log(board.getPieceAt(0, 0));
console.log(board.toString());