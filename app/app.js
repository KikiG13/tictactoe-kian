const playerOne = "X";
const playerTwo = "O";
let playerMove = 1;

const authEvents = require("./auth/events");

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
  $("#sign-up").on("submit", authEvents.onSignUp);
  $("#sign-in").on("submit", authEvents.onSignIn);
  $("#change-password").on("submit", authEvents.onChangePassword);
  $("#sign-out").on("submit", authEvents.onSignOut);

  $("#box").on("click", turns);

  //   $("#col-1a").on("click", () => {
  //     $("#col-1a").text("X")
  //   })
});
