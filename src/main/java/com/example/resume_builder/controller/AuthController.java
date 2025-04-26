package com.example.resume_builder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.resume_builder.model.User;
import com.example.resume_builder.services.UserServices;

import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private UserServices userService;
    
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Optional<User> existingUser = userService.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("message", "Email already in use"));
        }

        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok().body(Map.of("message", "User registered successfully", "user", savedUser));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Optional<User> foundUser = userService.findByEmail(user.getEmail());
        if (foundUser.isPresent() && foundUser.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok().body(Map.of("message", "Login successful", "token", "dummy-token"));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Invalid credentials"));
    }
}
