const store = require("../store");

const signUpSuccess = function (responseData) {
  $("#fail-message").hide();
  $("#display-message").text("Sign up successful!");
  $("#display-message").removeClass();
  $("#display-message").addClass("text-success");
  $("form").trigger("reset");
  console.log("responseData is", responseData);
};

const signUpFailure = function (error) {
  $("#fail-message").text("Sign up failure");
  $("#fail-message").removeClass();
  $("#fail-message").addClass("text-danger");
  console.error("error is", error);
};

const signInSuccess = function (responseData) {
  store.user = responseData.user;
  console.log("store is", store);
  $("#fail-message").hide();
  $("#display-message").text("Sign in successful!");
  $("#display-message").removeClass();
  $("#display-message").addClass("text-success");
  $("form").trigger("reset");
  $("#before-sign-in").hide();
  $("#after-sign-in").show();
  $("#sign-up-in").hide();
  console.log("responseData is", responseData);
};

const signInFailure = function (error) {
  $("#fail-message").text("Sign in failure");
  $("#fail-message").removeClass();
  $("#fail-message").addClass("text-danger");
  console.error("error is", error);
};

const newGameSuccess = function (responseData) {
  store.game = responseData.game;
  console.log("store is", store);
  $("#display-message").text("Start new game!");
  $("#display-message").removeClass();
  $("#display-message").addClass("text-success");
  $("form").trigger("reset");
  $(".before-new-game").show();
  $(".before-new-game").trigger("reset");
  $("#new-game").hide();
  $("#change-password").hide();
  console.log("responseData is", responseData);
};

const newGameFailure = function (error) {
  $("#fail-message").text("Unable to create new game");
  $("#fail-message").removeClass();
  $("#fail-message").addClass("text-danger");
  console.error("error is", error);
};

const changePasswordSuccess = function (responseData) {
  $("#display-message").text("Change password success!");
  $("#display-message").removeClass();
  $("#display-message").addClass("text-success");
  $("form").trigger("reset");
  console.log("responseData is", responseData);
};

const changePasswordFailure = function (error) {
  $("#fail-message").text("Change password failure!");
  $("#fail-message").removeClass();
  $("#fail-message").addClass("text-danger");
  console.error("error is", error);
};

const signOutSuccess = function (responseData) {
  $("#display-message").text("Sign out successful!");
  $("#display-message").removeClass();
  $("#display-message").addClass("text-success");
  $("form").trigger("reset");
  $("#before-sign-in").show();
  $("#after-sign-in").hide();
  console.log("responseData is", responseData);
};

const signOutFailure = function (error) {
  $("#fail-message").text("Sign out failure!");
  $("#fail-message").removeClass();
  $("#fail-message").addClass("text-danger");
  console.error("error is", error);
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
};
