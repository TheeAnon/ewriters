import React from "react";
import defaultAvatar from "../images/avatar.png";

function BubbleMe() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={defaultAvatar} />
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

export default BubbleMe;
