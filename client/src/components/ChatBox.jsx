import chatgpt_logo from '../assets/chatgpt_logo.png';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/ChatBox.css';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CHATWITHGPT } from '../utils/mutation';

const handleContentLoaded = () => { 
     console.log("DOM fully loaded and parsed");
          
     const chatLogo = document.getElementById("chatLogo");
     const chatWindow = document.getElementById("chatWindow");
     const closeChat = document.getElementById("closeChat");

     chatLogo.addEventListener("click", () => {
          console.log("Chat logo clicked");
          chatWindow.style.display = "block";
     });

     closeChat.addEventListener("click", () => {
          console.log("Close chat clicked");
          chatWindow.style.display = "none";
     });
};

export default function ChatBox() {
     useEffect(() => {
          console.log("using effect");
          handleContentLoaded();
     }, []);

     const [userFormData, setUserFormData] = useState({
          userInput: '',
     });

     const [chatWithGPT, { data, loading, error }] = useMutation(CHATWITHGPT);

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setUserFormData({ ...userFormData, [name]: value });
     };

     const handleChatSubmit = async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const chatOutput = document.getElementById("chatOutput");
          const prompt = userFormData.userInput;
          let chatResponse;

          if (prompt.trim()) {
               chatOutput.innerHTML += `<div class="user-message">${prompt}</div>`;

               try {
                    const { data } = await chatWithGPT({
                         variables: { prompt }
                    });
                    chatResponse = data.chatWithGPT;
               } catch (err) {
                    console.error(err);
               }
               chatOutput.innerHTML += `<div class="gpt-message">${chatResponse}</div>`; 
          }

          setUserFormData({
               userInput: '',
          });
     }; 

    return (
          <>
               <div className="chat-logo" id="chatLogo">
                    <img src={chatgpt_logo} alt="ChatGPT Logo" className="img-thumbnail" />
               </div>
               <div className="chat-window" id="chatWindow">
                    <div className="chat-header">
                         <span>Chat with OpenAI</span>
                         <Button id="closeChat" type="button" className="btn btn-light">X</Button>
                    </div>
                    <div className="chat-body">
                         <div id="chatOutput"></div>
                    </div>
                    <div>
                         <Form onSubmit={handleChatSubmit} className="chat-footer">
                              <Form.Control type="text" placeholder="Enter your question here.."  name="userInput" onChange={handleInputChange} value={userFormData.userInput} className=''/>
                              <Button type="submit"
                              className="btn btn-light" name="sendButton">
                              Send
                              </Button>
                         </Form>
                    </div>
               </div>
          </>
     )
}