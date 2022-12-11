import React from 'react'
import ChatBox from './ChatBox'
import ChatHeader from './ChatHeader'
// import { useSelector } from 'react-redux'

const Messages = () => {
  // const ischatUser = useSelector((state) => state.general.ischatUser)
  const isChat = window.localStorage.getItem("isChat")
  if (isChat)
    return (
      <div className='chat shadow-lg'>
        <ChatHeader />
        <hr />
        <ChatBox />


      </div>
    )
}

export default Messages
