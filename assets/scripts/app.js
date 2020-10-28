'use strict'
const authEvents = require('./auth/events')
const noteEvents = require('./note/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#note').on('submit', noteEvents.onNote)
  $('#record').on('click', noteEvents.onRecord)
  $('#update').on('submit', noteEvents.onUpdate)
  $('#remove').on('submit', noteEvents.onRemove)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#note').hide()
  $('#update').hide()
  $('#record').hide()
  $('#remove').hide()
  $('#sign-out-form').hide()
})
