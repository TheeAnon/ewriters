import React from "react";
import defaultAvatar from "../images/avatar.png";

function BubbleYou() {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="avatar" src={defaultAvatar} />
        </div>
      </div>
      <div className="chat-header">
        Me
        <time className="text-xs opacity-50">12:40</time>
      </div>
      <div className="chat-bubble">hey</div>
      <div className="chat-footer opacity-50">Read</div>
    </div>
  );
}

export default BubbleYou;
