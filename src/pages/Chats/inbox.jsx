import React from 'react'
import Chat from './components/Chat'
import Messages from './components/Messages'
const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Inbox = () => {
  return (
    <div className='inbox shadow-lg'>
      <div className='inbox-head'>
        <h4>
          Messages
          <img src="/images/edit.png" alt="" />
        </h4>
      </div>

      <div className="input-section">
        <input type="search" placeholder='Search Messages' />
        <button className='btn input-box-btn'>Inbox</button>

        <Messages />

        <div className="chats-list">
          {
            chats?.map((item, key) => (
              <Chat key={key} item={item} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Inbox