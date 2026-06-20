package com.smarthire.smarthire_backend.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ResumeService {

    public Map<String, Object> analyzeResume(MultipartFile file) throws IOException {

        // Load PDF
        PDDocument document = Loader.loadPDF(file.getBytes());

        // Extract text
        PDFTextStripper stripper = new PDFTextStripper();
        String text = stripper.getText(document);

        document.close();

        text = text.toLowerCase();

        // Master Skill List
        List<String> masterSkills = Arrays.asList(
                "java",
                "spring",
                "spring boot",
                "react",
                "mysql",
                "html",
                "css",
                "javascript",
                "python",
                "aws",
                "git",
                "docker",
                "kubernetes",
                "hibernate",
                "mongodb",
                "node.js",
                "express",
                "bootstrap",
                "rest api",
                "postman",
                "maven",
                "jenkins"
        );

        List<String> foundSkills = new ArrayList<>();
        List<String> missingSkills = new ArrayList<>();

        // Find skills
        for (String skill : masterSkills) {

            if (text.contains(skill.toLowerCase())) {
                foundSkills.add(skill);
            } else {
                missingSkills.add(skill);
            }
        }

        // ATS Score
        int atsScore = (foundSkills.size() * 100) / masterSkills.size();

        // Suggestions
        List<String> suggestions = new ArrayList<>();

        if (!text.contains("project")) {
            suggestions.add("Add Projects section");
        }

        if (!text.contains("internship")) {
            suggestions.add("Mention Internship experience");
        }

        if (!text.contains("certification")) {
            suggestions.add("Add Certifications");
        }

        if (!text.contains("github")) {
            suggestions.add("Add GitHub Profile");
        }

        if (!text.contains("linkedin")) {
            suggestions.add("Add LinkedIn Profile");
        }

        if (missingSkills.contains("docker")) {
            suggestions.add("Learn Docker");
        }

        if (missingSkills.contains("aws")) {
            suggestions.add("Learn AWS");
        }

        if (missingSkills.contains("kubernetes")) {
            suggestions.add("Learn Kubernetes");
        }

        // Response
        Map<String, Object> result = new HashMap<>();

        result.put("atsScore", atsScore);
        result.put("skills", foundSkills);
        result.put("missingSkills", missingSkills);
        result.put("suggestions", suggestions);

        return result;
    }
}