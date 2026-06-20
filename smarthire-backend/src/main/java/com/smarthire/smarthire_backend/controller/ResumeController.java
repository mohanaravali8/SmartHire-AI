package com.smarthire.smarthire_backend.controller;

import com.smarthire.smarthire_backend.service.ResumeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/resume")
@CrossOrigin("*")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;
@PostMapping("/upload")
public ResponseEntity<?> uploadResume(@RequestParam("file") MultipartFile file) {
    try {
        return ResponseEntity.ok(resumeService.analyzeResume(file));
    } catch (Exception e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
}