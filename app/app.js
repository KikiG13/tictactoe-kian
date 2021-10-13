const playerOne = 'X';
const playerTwo = 'O';
let playerMove = 1;
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
  } else {
    $(`#${event.target.id}`).html(playerTwo);
  }
  playerMove++
}



$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp);
  $('#sign-in').on('submit', authEvents.onSignIn);
  $('#change-password').on('submit', authEvents.onChangePassword);
  $('#sign-out').on('submit', authEvents.onSignOut);
  $('#new-game').on('click', authEvents.onNewGame);

  $('#box').on('click', turns);

  //   $('#col-1a').on('click', () => {
  //     $('#col-1a').text('X')
  //   })
});
