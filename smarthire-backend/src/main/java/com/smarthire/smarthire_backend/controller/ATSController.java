package com.smarthire.smarthire_backend.controller;

import java.util.Map;

import com.smarthire.smarthire_backend.service.ResumeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/ats")
@CrossOrigin("*")
public class ATSController {

    @Autowired
    private ResumeService resumeService;

    @PostMapping("/analyze")
    public Map<String, Object> analyze(
            @RequestParam("file") MultipartFile file)
            throws Exception {

        return resumeService.analyzeResume(file);
    }
}