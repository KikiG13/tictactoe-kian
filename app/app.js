const playerOne = 'X';
const playerTwo = 'O';
let playerMove = 1;
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

// const winPatterns = {
//   win1: [#col-1a, #col-1b, #col-1c]
//   win2: [#col-2a, #col-2b, #col-2c]
//   win3: [#col-3a, #col-3b, #col-3c]
//   win4: [#col-1a, #col-2a, #col-3a]
//   win5: [#col-1b, #col-2b, #col-3b]
//   win6: [#col-1c, #col-2c, #col-3c]
//   win7: [#col-1a, #col-2b, #col-3c]
//   win8: [#col-1c, #col-2b, #col-3a]
// }

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

// const noRepeat = function (event) {
//   if (
//     $(`#${event.target.id}`).html() === 'X' ||
//     $(`#${event.target.id}`).html() === 'O'
//   ) {
//     $(`#${event.target.id}`).off('click');
//     console.error('You cannot select this box');
//   }
// };

const winningCombos = function () {
  console.log(board);
  if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
    console.log(currentPlayer, 'Wins!');
  } else {
    console.log('Its a tie!')
  }
}

// const noTurn = function () {
//   if (event.target.id === 'x') {
//     $(`#${event.target.id}`).html(playerOne)
//   } else if ($(event.target.id === 'o') {
//     $(`#${event.target.id}`).html(playerTwo)
//   }
// }

const playAgain = function () {
  playerMove = 1;
  // $('#col-1a').html('').one('click', turns);
  // $('#col-1b').html('').one('click', turns);
  // $('#col-1c').html('').one('click', turns);
  // $('#col-2a').html('').one('click', turns);
  // $('#col-2b').html('').one('click', turns);
  // $('#col-2c').html('').one('click', turns);
  // $('#col-3a').html('').one('click', turns);
  // $('#col-3b').html('').one('click', turns);
  // $('#col-3c').html('').one('click', turns);

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
};

const xWins = function () {
  if ('#col-1a, #col-1b, #col-1c' === 'x') {
    $('#');
  }
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
  // $('#box').on('click', noRepeat);

  // $('#col-1a').one('click', turns);
  // $('#col-1b').one('click', turns);
  // $('#col-1c').one('click', turns);
  // $('#col-2a').one('click', turns);
  // $('#col-2b').one('click', turns);
  // $('#col-2c').one('click', turns);
  // $('#col-3a').one('click', turns);
  // $('#col-3b').one('click', turns);
  // $('#col-3c').one('click', turns);

  //   $('#col-1a').on('click', () => {
  //     $('#col-1a').text('X')
  //   })
});
