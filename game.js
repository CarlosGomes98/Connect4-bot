const Board = require("./board");
const readline = require('readline-sync');
const MCTS = require ("./mcts");

let board = new Board(7, 6);

let turn = 1;
let win = false;
let draw = false;
do {
    let move = null;
    console.log(board.toString());
    if (turn == 1)
        move = parseInt(readline.question(`Player ${turn} move\n`));
    else
        move = MCTS(board, turn);
    try {
        let state = board.makeMoveAndCheckWin(turn, move);
        win = state["win"];
        draw = state["draw"]
    } catch (e) {
        console.log(e);
        return;
    }
    if(!win) turn = (turn === 1 ? 2 : 1);
} while (!(win || draw));

console.log(board.toString());
console.log(turn);
