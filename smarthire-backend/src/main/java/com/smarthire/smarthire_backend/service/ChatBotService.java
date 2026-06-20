package com.smarthire.smarthire_backend.service;

import org.springframework.stereotype.Service;

import com.smarthire.smarthire_backend.dto.ChatResponse;

@Service
public class ChatBotService {

    public ChatResponse getReply(String message){

        message = message.toLowerCase();

        if(message.contains("hello"))
            return new ChatResponse("Hello 👋 How can I help you?");

        if(message.contains("java"))
            return new ChatResponse("Java is an object-oriented programming language.");

        if(message.contains("react"))
            return new ChatResponse("React is a JavaScript library for building user interfaces.");

        if(message.contains("spring"))
            return new ChatResponse("Spring Boot simplifies Java application development.");

        return new ChatResponse("I'm still learning. 😊");
    }

}