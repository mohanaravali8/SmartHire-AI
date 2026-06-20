package com.smarthire.smarthire_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smarthire.smarthire_backend.dto.InterviewRequest;
import com.smarthire.smarthire_backend.dto.InterviewResponse;
import com.smarthire.smarthire_backend.service.InterviewCoachService;

@RestController
@RequestMapping("/interview")
@CrossOrigin(origins = "http://localhost:5173")
public class InterviewCoachController {

    @Autowired
    private InterviewCoachService interviewCoachService;

    @PostMapping("/questions")
    public InterviewResponse generateQuestions(
            @RequestBody InterviewRequest request) {

        return interviewCoachService.generateQuestions(request.getTechnology());
    }
}