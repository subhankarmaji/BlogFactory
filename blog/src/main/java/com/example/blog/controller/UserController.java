package com.example.blog.controller;

import com.example.blog.entity.Login;
import com.example.blog.entity.User;
import com.example.blog.repository.UserRepo;
import com.example.blog.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(UserController.class);
    @Autowired
    private UserService userService;
    @PostMapping("/signup")
    ResponseEntity<String> signUp(@RequestBody User user){
        logger.info("trying to signUp with credential "+user.toString());
        return this.userService.signUp(user);

    }

    @PostMapping("/login")
    ResponseEntity<String> login(@RequestBody Login login){
        logger.info("trying to login with credential "+ login.toString());
        return this.userService.login(login);
    }

}
