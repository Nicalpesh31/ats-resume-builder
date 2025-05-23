package com.example.resume_builder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.resume_builder.model.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
