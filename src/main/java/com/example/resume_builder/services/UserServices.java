package com.example.resume_builder.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.resume_builder.repository.UserRepository;
import com.example.resume_builder.model.User;
import java.util.List;
import java.util.Optional;

@Service  
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

}
