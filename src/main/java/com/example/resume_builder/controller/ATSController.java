package com.example.resume_builder.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.IOException;
import java.util.*;

@RestController
@RequestMapping("/api/ats")
public class ATSController {

    // Sample job-related keywords for matching
    private static final List<String> KEYWORDS = List.of("Java", "Spring Boot", "MySQL", "REST API", "React");

    @PostMapping("/check-score")
    public Map<String, Object> checkAtsScore(@RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();

        try (PDDocument document = PDDocument.load(file.getInputStream())) {
            PDFTextStripper stripper = new PDFTextStripper();
            String resumeText = stripper.getText(document).toLowerCase();

            long matchedKeywords = KEYWORDS.stream()
                    .map(String::toLowerCase)
                    .filter(resumeText::contains)
                    .count();

            int score = (int) ((matchedKeywords * 100.0) / KEYWORDS.size());

            response.put("score", score);
            response.put("matchedKeywords", matchedKeywords);
            response.put("totalKeywords", KEYWORDS.size());
            response.put("message", "ATS score calculated successfully.");
        } catch (IOException e) {
            response.put("error", "Failed to read PDF file.");
        }

        return response;
    }
}
