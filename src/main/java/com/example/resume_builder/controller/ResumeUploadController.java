package com.example.resume_builder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/resume")
public class ResumeUploadController {

    @PostMapping("/upload")
    public ResponseEntity<String> handleResumeUpload(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("File is empty");
        }

        // TODO: Extract content from PDF using PDFBox or iText
        String fileName = file.getOriginalFilename();
        return ResponseEntity.ok("Uploaded successfully: " + fileName);
    }
}
