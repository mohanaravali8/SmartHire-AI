package com.smarthire.smarthire_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.smarthire.smarthire_backend.dto.ResumeAnalysisResponse;

@Service
public class ResumeAnalysisService {

    public ResumeAnalysisResponse analyzeResume(String text) {

        List<String> skills = new ArrayList<>();

        String[] knownSkills = {
                "java","spring","spring boot",
                "mysql","react","html","css",
                "javascript","python","git"
        };

        for(String skill : knownSkills){
            if(text.toLowerCase().contains(skill)){
                skills.add(skill);
            }
        }

        int score = skills.size() * 10;
        if(score > 100) score = 100;

        List<String> suggestions = new ArrayList<>();

        if(!text.toLowerCase().contains("project")){
            suggestions.add("Add project details.");
        }

        if(!text.toLowerCase().contains("internship")){
            suggestions.add("Add internship experience.");
        }

        if(!text.toLowerCase().contains("certification")){
            suggestions.add("Add certifications.");
        }

        if(!skills.contains("spring boot")){
            suggestions.add("Learn and add Spring Boot.");
        }

        if(!skills.contains("sql")){
            suggestions.add("Add SQL skills.");
        }

        if(score >= 80){
            suggestions.add("Resume looks strong. Add achievements to make it stand out.");
        }
        

        return new ResumeAnalysisResponse(score, skills, suggestions);
    }
}