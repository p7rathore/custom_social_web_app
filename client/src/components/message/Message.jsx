import React from "react";
import { format } from "timeago.js";
import "./message.css";

export default function Message({ message, own, currentUser, currenFriend }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log("message--->", message);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
            own
              ? currentUser.profilePicture
                ? PF + currentUser.profilePicture
                : PF + "noAvtar.jpg"
              : currenFriend.profilePicture
              ? PF + currenFriend.profilePicture
              : PF + "noAvtar.jpg.jpg"
          }
          alt=""
        />
        <p className="messageText">{message?.text}</p>
      </div>
      <div className="messageBottom">{format(message?.createdAt)}</div>
    </div>
  );
}
