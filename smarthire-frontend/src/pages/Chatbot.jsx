import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css";

function ChatBot() {

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Hello! Welcome to SmartHire AI Assistant.\nHow can I help you today?"
        }
    ]);

    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {

        if (message.trim() === "") return;

        const userMessage = {
            sender: "user",
            text: message
        };

        setMessages(prev => [...prev, userMessage]);

        try {

            const response = await axios.post(
                "http://localhost:8000/chatbot/chat",
                {
                    message: message
                }
            );

            const botMessage = {
                sender: "bot",
                text: response.data.reply
            };

            setMessages(prev => [...prev, botMessage]);

        // eslint-disable-next-line no-unused-vars
        } catch (error) {

            setMessages(prev => [...prev, {
                sender: "bot",
                text: "❌ Sorry! Server is unavailable."
            }]);

        }

        setMessage("");

    };

    return (

        <div className="chat-container">

            <div className="chat-header">
                🤖 SmartHire AI Assistant
            </div>

            <div className="chat-body">

                {
                    messages.map((msg, index) => (

                        <div
                            key={index}
                            className={
                                msg.sender === "user"
                                    ? "user-message"
                                    : "bot-message"
                            }
                        >
                            {msg.text}
                        </div>

                    ))
                }

                <div ref={chatEndRef}></div>

            </div>

            <div className="chat-footer">

                <input
                    type="text"
                    placeholder="Ask anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            sendMessage();
                    }}
                />

                <button onClick={sendMessage}>
                    ➤
                </button>

            </div>

        </div>

    );

}

export default ChatBot;