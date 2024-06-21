import chatgpt_logo from '../assets/chatgpt_logo.png';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/ChatBox.css';
import React, { useEffect } from 'react';

const handleContentLoaded = () => { 
     console.log("DOM fully loaded and parsed");
          
     const chatLogo = document.getElementById("chatLogo");
     const chatWindow = document.getElementById("chatWindow");
     const closeChat = document.getElementById("closeChat");
     const sendButton = document.getElementById("sendButton");
     const userInput = document.getElementById("userInput");
     const chatOutput = document.getElementById("chatOutput");

     chatLogo.addEventListener("click", () => {
          chatWindow.style.display = "block";
     });

     closeChat.addEventListener("click", () => {
          chatWindow.style.display = "none";
     });

     sendButton.addEventListener("click", async () => {
          const prompt = userInput.value;
          userInput.value = "";

          if (prompt.trim()) {
               chatOutput.innerHTML += `<div class="user-message">${prompt}</div>`;

               const response = await fetch("/generate", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ prompt })
               });

               if (!response.ok) {
                    const errorMessage = await response.json();
                    console.error('Error: ', errorMessage.error);
                    return;
               }

               const data = await response.text();
               chatOutput.innerHTML += `<div class="gpt-message">${data}</div>`;
          }
     }); 
};

export default function ChatBox() {
     useEffect(() => {
          console.log("using effect");
          handleContentLoaded();
     }, []);

    return (
          <>
               <div className="chat-logo" id="chatLogo">
                    <img src={chatgpt_logo} alt="ChatGPT Logo" className="img-thumbnail" />
               </div>
               <div className="container-fluid">
                    <div className="chat-window" id="chatWindow">
                         <div className="chat-header">
                              <span>Chat with OpenAI</span>
                              <Button id="closeChat" type="button" className="btn btn-light">X</Button>
                         </div>
                         <div className="chat-body">
                              <div id="chatOutput"></div>
                         </div>
                         <div className="chat-footer">
                              <Form.Control size="lg" type="text" placeholder="Large text" />
                              <Button type='button'
                              className="btn btn-light" id="sendButton">
                              Send
                              </Button>
                         </div>
                    </div>
               </div>
          </>
     )
}