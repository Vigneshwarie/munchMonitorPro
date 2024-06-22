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

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setUserFormData({ ...userFormData, [name]: value });
     };

     const handleChatSubmit = async (event) => {
          console.log("hello");
          event.preventDefault();
          const form = event.currentTarget;
          console.log("my form", form);
          console.log(userFormData);
          const chatOutput = form.elements.chatOutput;
          const prompt = userFormData.userInput;
          
          console.log("Prompt: ", prompt);

          const [chatWithGpt, { data, loading, error }] = useMutation(CHATWITHGPT);

          console.log(321);

          if (prompt.trim()) {
               chatOutput.innerHTML += `<div class="user-message">${prompt}</div>`;
               console.log(123);

               try {
                    const { response } = await chatWithGpt({
                         variables: { ...userFormData }
                    });
                    console.log("response==", response);
                    console.log(response.data.chatWithGPT);
               } catch (err) {
                    console.error(err);
               }

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

          setUserFormData({
               userInput: '',
          });
     }; 

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
                             <Form onSubmit={handleChatSubmit}>
                                   <Form.Control size="lg" type="text" placeholder="Enter your question here.." name="userInput" onChange={handleInputChange} />
                                   <Button type='submit'
                                   className="btn btn-light" name="sendButton">
                                   Send
                                  </Button>
                              </Form>
                         </div>
                    </div>
               </div>
          </>
     )
}