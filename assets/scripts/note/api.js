'use strict'
const noteConfig = require('./../config')
const noteStore = require('./../store')

const note = function (data) {
  return $.ajax({
    url: noteConfig.apiUrl + '/note',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + noteStore.user.token },
    data: data
  })
}

const record = function (data) {
  return $.ajax({
    url: noteConfig.apiUrl + '/note',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + noteStore.user.token
    }
    // data:
  })
}

const update = function (data) {
  return $.ajax({
    url: noteConfig.apiUrl + '/note/' + data.note.id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + noteStore.user.token },
    data: {
      note: {
        restaurant: data.note.restaurant,
        cuisine: data.note.cuisine,
        address: data.note.address,
        phone: data.note.phone
      }
    }
  })
}

const remove = function (noteId) {
  return $.ajax({
    url: noteConfig.apiUrl + '/note/' + noteId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + noteStore.user.token
    }
  })
}

module.exports = {
  note: note,
  record: record,
  update: update,
  remove: remove
}
