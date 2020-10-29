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
  $('#sign-in-form').hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#already-link').on('click', alreadylink)
  $('#already-signup-link').on('click', alreadySignupLink)
  $('#already-signup-text').hide()
  $('#already-signup-link').hide()
  $('.change-password').on('click', cpclick)
  $('.create-note').on('click', createnoteclick)
  $('.delete-note').on('click', removenoteclick)
  $('.see-note').on('click', seerecordclick)
  $('.update-note').on('click', updatenoteclick)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#note').on('submit', noteEvents.onNote)
  $('#record').on('click', noteEvents.onRecord)
  $('#update').on('submit', noteEvents.onUpdate)
  $('#remove').on('submit', noteEvents.onRemove)
  $('#navid').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#note').hide()
  $('#update').hide()
  $('#record').hide()
  $('#remove').hide()
  $('#sign-out-form').hide()
})

const cpclick = function () {
  $('#remove').hide()
  $('#update').hide()
  $('#change-password-form').show()
  $('#note').hide()
  $('#record').hide()
}

const removenoteclick = function () {
  $('#remove').show()
  $('#update').hide()
  $('#change-password-form').hide()
  $('#note').hide()
  $('#record').hide()
}

const updatenoteclick = function () {
  $('#remove').hide()
  $('#update').show()
  $('#change-password-form').hide()
  $('#note').hide()
  $('#record').hide()
}

const createnoteclick = function () {
  $('#remove').hide()
  $('#update').hide()
  $('#change-password-form').hide()
  $('#note').show()
  $('#record').hide()
}

const seerecordclick = function () {
  $('#remove').hide()
  $('#update').hide()
  $('#change-password-form').hide()
  $('#note').hide()
  $('#record').show()
}

const alreadylink = function () {
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
  $('#already-text').hide()
  $('#already-link').hide()
  $('#already-signup-text').show()
  $('#already-signup-link').show()
}

const alreadySignupLink = function () {
  $('#sign-up-form').show()
  $('#sign-in-form').hide()
  $('#already-signup-text').hide()
  $('#already-signup-link').hide()
  $('#already-text').show()
  $('#already-link').show()
}
