package com.example.blog.service;

import com.example.blog.entity.User;
import com.example.blog.repository.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceimpl implements UserService{
    private final Logger logger = LoggerFactory.getLogger(UserServiceimpl.class);
    @Autowired
    private UserRepo userRepo;
    @Override
    public ResponseEntity<String> signUp(User user) {
        boolean emailAlreadyExist = userRepo.existsUserByEmail(user.getEmail());
        boolean mobileAlreadyExist = userRepo.existsUserByMobile(user.getMobile());
        boolean userNameAlreadyExist = userRepo.existsUserByUsername(user.getUsername());
        if(emailAlreadyExist){
            logger.error("email already exist");
            return ResponseEntity.badRequest().body("emailExist");
        }
        if(mobileAlreadyExist){
            logger.error("mobile number already exist");
            return ResponseEntity.badRequest().body("mobileExist");
        }
        if(userNameAlreadyExist){
            logger.error("username already exist");
            return ResponseEntity.badRequest().body("usernameExist");
        }
        try{
            userRepo.save(user);
            logger.info("user registered successfully with credential "+user.toString());
            return ResponseEntity.status(HttpStatus.OK).body("ok");
        }catch(Exception e){
            logger.error("registration failed due to "+e);
            return ResponseEntity.badRequest().body("Error");
        }
    }
}
