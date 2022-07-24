package com.example.blog.service;

import com.example.blog.entity.Login;
import com.example.blog.entity.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    ResponseEntity<String> signUp(User user);

    ResponseEntity<User> login(Login login);

    ResponseEntity<?> getalluser();
}
