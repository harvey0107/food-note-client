const getFormFields = require('./../../../lib/get-form-fields')
const noteapi = require('./api')
const noteui = require('./ui')

const onNote = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  noteapi.note(data)
    .then(noteui.onNoteSuccess)
    .catch(noteui.onNoteFailure)
}
const onRecord = function () {
  event.preventDefault()
  noteapi.record()
    .then(noteui.onRecordSuccess)
    .catch(noteui.onRecordFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  noteapi.update(data)
    .then(noteui.onUpdateSuccess)
    .catch(noteui.onUpdateFailure)
}

const onRemove = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const noteId = data.note.id
  noteapi.remove(noteId)
    .then(noteui.onRemoveSuccess)
    .catch(noteui.onRemoveFailure)
}

module.exports = {
  onNote: onNote,
  onRecord: onRecord,
  onUpdate: onUpdate,
  onRemove: onRemove
}
