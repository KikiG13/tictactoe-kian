const playerOne = "X";
const playerTwo = "O";
let playerMove = 1;

const boxOne = []
const boxTwo = []


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
  if (playerMove % 2 === 1) {
    $(`#${event.target.id}`).html(playerOne);
    input.push('x')
  } else {
    $(`#${event.target.id}`).html(playerTwo);
    input.push('o')
  }

  playerMove++
}

const noRepeat = function (event) {
  if (`#${event.target.id}` === 'x' || `#${event.target.id}` === 'o') {
    console.error('You cannot select this box');
  } else {
    return turns
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
  playerMove = 1
  $('#col-1a').html('').one('click', turns);
  $('#col-1b').html('').one('click', turns);
  $('#col-1c').html('').one('click', turns);
  $('#col-2a').html('').one('click', turns);
  $('#col-2b').html('').one('click', turns);
  $('#col-2c').html('').one('click', turns);
  $('#col-3a').html('').one('click', turns);
  $('#col-3b').html('').one('click', turns);
  $('#col-3c').html('').one('click', turns);

  // $('#col-1a').html('');
  // $('#col-1b').html('');
  // $('#col-1c').html('');
  // $('#col-2a').html('');
  // $('#col-2b').html('');
  // $('#col-2c').html('');
  // $('#col-3a').html('');
  // $('#col-3b').html('');
  // $('#col-3c').html('');
}

const xWins = function () {
  if ('#col-1a, #col-1b, #col-1c' === 'x') {
    $('#')

  }
}


$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp);
  $('#sign-in').on('submit', authEvents.onSignIn);
  $('#change-password').on('submit', authEvents.onChangePassword);
  $('#sign-out').on('submit', authEvents.onSignOut);
  $('#new-game').on('click', authEvents.onNewGame);
  $('#play-again').on('click', playAgain);
  $('.before-new-game').hide()

  // $('#box').on('click', turns);
  // $('#box').on('click', noRepeat);

  $('#col-1a').one('click', turns).boxOne.push('');
  $('#col-1b').one('click', turns);
  $('#col-1c').one('click', turns);
  $('#col-2a').one('click', turns);
  $('#col-2b').one('click', turns);
  $('#col-2c').one('click', turns);
  $('#col-3a').one('click', turns);
  $('#col-3b').one('click', turns);
  $('#col-3c').one('click', turns);




  //   $('#col-1a').on('click', () => {
  //     $('#col-1a').text('X')
  //   })
});
