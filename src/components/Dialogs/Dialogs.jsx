import React from 'react'
import module from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = (props) => {
  let state = props.dialogsPage
  let dialogsElements = state.dialogs.map(
    (d) => <DialogItem name={d.name} key={d.id} id={d.id} />
  )
  let messagesElements = state.messages.map(
    (m) => <Message message={m.message} key={m.id} />
  )

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={module.dialogs}>
      <div className={module.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={module.messages}>
        <div>
          {messagesElements}
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>

    </div>
  )
}

export default Dialogs