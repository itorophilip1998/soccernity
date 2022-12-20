import React from 'react'

function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="subHead">
                <div className="chat-img">
                    <img src="/images/chat-profile.png" alt="" />
                </div>

                <div className="prof-info">
                    <div className="chat-name">
                        Kingsley Chukwudi
                        <div className="chat-time">
                            Active 6h ago.
                        </div>
                    </div>
                </div>
                <div className="caret">
                    <img src="/images/chat-caret.png" alt="" />
                </div>
            </div>
            <div className="nav-box pr-1">
                <img src="/images/hide.png" alt="" />
                <img src="/images/close.png" alt="" />
            </div>
        </div>
    )
}

export default ChatHeader
