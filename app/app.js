const store = require('./store')
const authEvents = require('./auth/events')
const playerOne = 'X'
const playerTwo = 'O'
store.playerMove = 1
let currentPlayer = 'X'
store.board = ['', '', '', '', '', '', '', '', '']

store.turns = function (event) {
  console.log(event.target.id)
  if ($(event.target).html() === '') {
    if (store.playerMove % 2 === 1) {
      $(`#${event.target.id}`).html(playerOne)
      store.playerMove++
      currentPlayer = playerOne
    } else {
      $(`#${event.target.id}`).html(playerTwo)
      store.playerMove++
      currentPlayer = playerTwo
    }
    boardArray(event.target.id)
    winningCombos()
  }
}

const boardArray = function (id) {
  if (id === 'col-1a') {
    store.board[0] = currentPlayer
  } else if (id === 'col-1b') {
    store.board[1] = currentPlayer
  } else if (id === 'col-1c') {
    store.board[2] = currentPlayer
  } else if (id === 'col-2a') {
    store.board[3] = currentPlayer
  } else if (id === 'col-2b') {
    store.board[4] = currentPlayer
  } else if (id === 'col-2c') {
    store.board[5] = currentPlayer
  } else if (id === 'col-3a') {
    store.board[6] = currentPlayer
  } else if (id === 'col-3b') {
    store.board[7] = currentPlayer
  } else if (id === 'col-3c') {
    store.board[8] = currentPlayer
  }
  console.log(store.board)
}

const winningCombos = function () {
  console.log(store.board)
  const tie = function (array) {
    return array !== ''
  }
  if (store.board[0] === store.board[1] && store.board[0] === store.board[2] && store.board[0] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board[3] === store.board[4] && store.board[3] === store.board[5] && store.board[3] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board[6] === store.board[7] && store.board[6] === store.board[8] && store.board[6] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board[0] === store.board[3] && store.board[0] === store.board[6] && store.board[0] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board[1] === store.board[4] && store.board[1] === store.board[7] && store.board[1] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board[2] === store.board[5] && store.board[2] === store.board[8] && store.board[2] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board[0] === store.board[4] && store.board[0] === store.board[8] && store.board[0] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board[2] === store.board[4] && store.board[2] === store.board[6] && store.board[2] !== '') {
    $('.footer').html(`${currentPlayer} Wins!`)
    $('#box').off()
  } else if (store.board.every(tie)) {
    $('.footer').html('Its a Draw!')
    $('#box').off()
  }
}

const playAgain = function () {
  store.playerMove = 1
  $('#col-1a').html('')
  $('#col-1b').html('')
  $('#col-1c').html('')
  $('#col-2a').html('')
  $('#col-2b').html('')
  $('#col-2c').html('')
  $('#col-3a').html('')
  $('#col-3b').html('')
  $('#col-3c').html('')
  store.board = ['', '', '', '', '', '', '', '', '']
  $('.footer').html('')
  $('#box').off('click', store.turns)
  $('#box').on('click', store.turns)
  $('#display-message').text('Play again!')
  $('#new-game').hide()
  $('#box').show()
  $('.footer').show()
}

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#play-again').on('click', playAgain)
  $('.before-new-game').hide()
  $('#after-sign-in').hide()
  // playAgain()
  $('#box').on('click', store.turns)
  $('#play-again').hide()
})
