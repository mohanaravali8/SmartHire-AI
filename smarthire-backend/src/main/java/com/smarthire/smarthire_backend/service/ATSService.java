package com.smarthire.smarthire_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthire.smarthire_backend.dto.ResumeAnalysisResponse;

@Service
public class ATSService {

    public ResumeAnalysisResponse analyze(String text) {

        List<String> skills = new ArrayList<>();

        String[] knownSkills = {
                "java",
                "spring",
                "spring boot",
                "mysql",
                "react",
                "html",
                "css",
                "javascript",
                "python",
                "git"
        };

        for (String skill : knownSkills) {
            if (text.toLowerCase().contains(skill)) {
                skills.add(skill);
            }
        }

        int score = skills.size() * 10;

        if(score > 100){
            score = 100;
        }

        List<String> suggestions = new ArrayList<>();

        if(!skills.contains("spring boot")){
            suggestions.add("Learn Spring Boot");
        }

        if(!skills.contains("docker")){
            suggestions.add("Learn Docker");
        }

        if(!skills.contains("aws")){
            suggestions.add("Learn AWS");
        }

        if(!skills.contains("mongodb")){
            suggestions.add("Learn MongoDB");
        }

        return new ResumeAnalysisResponse(
                score,
                skills,
                suggestions
        );
    }
}