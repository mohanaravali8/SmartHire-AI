package com.smarthire.smarthire_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smarthire.smarthire_backend.dto.ChatRequest;
import com.smarthire.smarthire_backend.dto.ChatResponse;
import com.smarthire.smarthire_backend.service.ChatBotService;

@RestController
@RequestMapping("/chatbot")
@CrossOrigin(origins = "http://localhost:5173")
public class ChatBotController {

    @Autowired
    private ChatBotService chatBotService;

    @PostMapping("/chat")
    public ChatResponse chat(@RequestBody ChatRequest request){

        return chatBotService.getReply(request.getMessage());

    }

}