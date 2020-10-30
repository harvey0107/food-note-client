const noteapi = require('./api')

const onNoteSuccess = function (response) {
  $('#message').show()
  $('#message').text('Note created successfully ')
  $('#note').trigger('reset')
  $('#message').hide(6000)
}
const onNoteFailure = function () {
  $('#message').show()
  $('#message').text('Failed!')
  $('#note').trigger('reset')
  $('#message').hide(6000)
}

const onRecordSuccess = function (response) {
  $('#message').show()
  $('#message').text('Check your records!')
  $('#message').hide()
  // trackerStore.user = response.user
  const recordlist = response.note
  let sendhtml = '<ol>'
  recordlist.forEach(data => {
    sendhtml += `<li id=${data._id}><div>
    <ol class="restdata">
    <li> Restaurant:${data.restaurant}</li>
    <li> Cuisine: ${data.cuisine}</li>
    <li> Address: ${data.address}</li>
    <li> Phone: ${data.phone}</li>
    <li> noteId: ${data._id}</li>
    </ol>
    <button type="button" class="remove btn btn-secondary" id=${data._id}>X</button>
    </div></li>`
    return sendhtml
  })
  sendhtml += '</ol>'
  $('#sawRecords').html(sendhtml)
  // $('#sawRecords').hide(100000)
}

const onRecordFailure = function () {
  $('#message').show()
  $('#message').text('Oops, Try again!')
  $('#sign-in-form').trigger('reset')
  $('#message').hide(6000)
}

const onUpdateSuccess = function () {
  $('#message').show()
  $('#message').text('Note have been updated successfully')
  $('#update').trigger('reset')
  $('#message').hide(6000)
}
const onUpdateFailure = function () {
  $('#message').show()
  $('#message').text('Error')
  $('#update').trigger('reset')
  $('#message').hide(6000)
}

const onRemoveSuccess = function () {
  $('#message').show()
  $('#message').text('Note have been removed successfully')
  $('#message').hide(6000)
  noteapi.record()
    .then(onRecordSuccess)
    .catch(onRecordFailure)
}

const onRemoveFailure = function () {
  $('#message').show()
  $('#message').text('Record was not removed!')
  $('#message').hide(6000)
}

module.exports = {
  onNoteSuccess,
  onNoteFailure,
  onRecordSuccess,
  onRecordFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onRemoveSuccess,
  onRemoveFailure
}
