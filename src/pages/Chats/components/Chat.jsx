import React from 'react'

const Chat = ({ item, key }) => {
  return (
    <div className='chats'>
      <div className="img-box-chats">
        <img src="/images/chat-profile.png" alt="" />
        {(item === 2 || item === 5) && <img src="/images/online.png" alt="" className='isOnline' />}
      </div>
      <div className="infobox">
        <h5 className="name">
          Kingsley Chukwudi
        </h5>
        <p className="islastchat">
          {(item === 2 || item === 5) ? <span className='other-chat'>Hey Man</span> :
            <span> You: Morning </span>}
          <img src="/images/dot.png" alt="" className='space' />

          <span className="time">10h</span>
        </p>
      </div>
      <div className="right-info">
        <div class="dropdown ">
          <img src="/images/threedot.png" alt="" id="dropchatsInput" data-toggle="dropdown" aria-haspopup="true" />

          <div class="dropdown-menu dropchatsInput shadow" aria-labelledby="dropchatsInput">
            <button class="dropdown-item btn"><img src="/images/mark.png" alt="" /> <span>Mark as Read</span></button>
            <button class="dropdown-item btn"><img src="/images/check-profile.png" alt="" /> <span>View User Profile</span></button>
            <button class="dropdown-item  btn text-danger"><img src="/images/ban.png" alt="" /> <span>Block User</span></button>
            <button class="dropdown-item btn"><img src="/images/delete.png" alt="" /> <span>Delete Chat</span></button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
