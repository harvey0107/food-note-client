const onNoteSuccess = function (response) {
  $('#message').show()
  $('#message').text('Nice workout')
  $('#note').trigger('reset')
  $('#message').hide()
}
const onNoteFailure = function () {
  $('#message').show()
  $('#message').text('Failed!')
  $('#note').trigger('reset')
  $('#message').hide()
}

const onRecordSuccess = function (response) {
  $('#message').show()
  $('#message').text('Check your records!')
  $('#message').hide()
  // trackerStore.user = response.user
  const recordlist = response.note
  let sendhtml = '<ol>'
  recordlist.forEach(data => {
    sendhtml += `<li id=${data._id}> Restaurant:${data.restaurant}
    \n Cuisine: ${data.cuisine} \n Address: ${data.address}
    \n Phone: ${data.phone} \n noteId: ${data._id}</li>`
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
}

const onUpdateSuccess = function () {
  $('#message').show()
  $('#message').text('Workout have been updated successfully')
  $('#update').trigger('reset')
  $('#message').hide(6000)
}
const onUpdateFailure = function () {
  $('message').show()
  $('#message').text('Error')
  $('#update').trigger('reset')
  $('#message').hide(6000)
}

const onRemoveSuccess = function () {
  $('message').show()
  $('#message').text('Record have been removed successfully')
  $('#remove').trigger('reset')
  $('message').hide(6000)
}

const onRemoveFailure = function () {
  $('message').show()
  $('#message').text('Record was not removed!')
  $('message').hide(6000)
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
