const playerOne = 'X';
const playerTwo = 'O';
let playerMove = 1;
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = true

const authEvents = require('./auth/events');

const turns = function (event) {
  console.log(event.target.id);
  if ($(event.target).html() === '') {
    if (playerMove % 2 === 1) {
      $(`#${event.target.id}`).html(playerOne);
      playerMove++;
      currentPlayer = playerOne;
    } else {
      $(`#${event.target.id}`).html(playerTwo);
      playerMove++;
      currentPlayer = playerTwo;
    }
    boardArray(event.target.id);
    winningCombos()
  }
};

const boardArray = function (id) {
  if (id === 'col-1a') {
    board[0] = currentPlayer;
  } else if (id === 'col-1b') {
    board[1] = currentPlayer;
  } else if (id === 'col-1c') {
    board[2] = currentPlayer;
  } else if (id === 'col-2a') {
    board[3] = currentPlayer;
  } else if (id === 'col-2b') {
    board[4] = currentPlayer;
  } else if (id === 'col-2c') {
    board[5] = currentPlayer;
  } else if (id === 'col-3a') {
    board[6] = currentPlayer;
  } else if (id === 'col-3b') {
    board[7] = currentPlayer;
  } else if (id === 'col-3c') {
    board[8] = currentPlayer;
  }
  console.log(board);
};

const playerWon = function () {

}

const winningCombos = function () {
  console.log(board);
  const tie = function (array) {
    return array !== ''
  }
  if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('.footer').html(currentPlayer, 'Wins!')
    $('#box').off()
  } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('#box').off()
  } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('#box').off()
  } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('#box').off()
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('#box').off()
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('#box').off()
  } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('#box').off()
  } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
    console.log(currentPlayer, 'Wins!');
    $('#box').off()
  } else if (board.every(tie)) {
    console.log('Its a tie!')
    $('#box').off()
  }
}

const playAgain = function () {
  playerMove = 1;
  $('#col-1a').html('');
  $('#col-1b').html('');
  $('#col-1c').html('');
  $('#col-2a').html('');
  $('#col-2b').html('');
  $('#col-2c').html('');
  $('#col-3a').html('');
  $('#col-3b').html('');
  $('#col-3c').html('');
  board = ['', '', '', '', '', '', '', '', ''];
  $('#box').on('click', turns)
};

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp);
  $('#sign-in').on('submit', authEvents.onSignIn);
  $('#change-password').on('submit', authEvents.onChangePassword);
  $('#sign-out').on('submit', authEvents.onSignOut);
  $('#new-game').on('click', authEvents.onNewGame);
  $('#play-again').on('click', playAgain);
  $('.before-new-game').hide();
  playAgain()
  $('#box').on('click', turns);
});
