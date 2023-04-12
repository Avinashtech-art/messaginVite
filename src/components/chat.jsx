import React, { useState, useRef, useEffect } from "react";
import "./chat.css";

function ChatUI() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isFirstUser, setIsFirstUser] = useState(true);
  const messagesEndRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim()) {
      const message = {
        content: newMessage.trim(),
        sender: isFirstUser ? "user1" : "user2",
      };
      setMessages([...messages, message]);
    }
    setNewMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="UI">
      <h1 className="head">Messenger</h1>
      <div class="chat-container">
        <ul className="text">
          {messages.map((message, index) => (
            <div key={index} className="message-container">
              {message.sender === "user1" ? (
                <div className="message-left">
                  <div className="box">{message.content}</div>
                </div>
              ) : (
                <div className="message-right">
                  <div className="box">{message.content}</div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
      <div className="container-form">
        <div className="form">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-childOne">
              <input
                type="text"
                className="input-section"
                value={newMessage}
                onChange={(event) => setNewMessage(event.target.value)}
              />
            </div>

            <div className="form-childthree">
              <div className="switch">
                <label>
                  <input
                    type="checkbox"
                    checked={isFirstUser}
                    onChange={() => setIsFirstUser(!isFirstUser)}
                  />
                  <span class="slider round"></span>
                  <br></br>
                  <br></br>
                  {/* {isFirstUser ? "user1" : "user2"} */}
                </label>
              </div>
            </div>

            <div className="form-childtwo">
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatUI;
