package com.example.blog.service;

import com.example.blog.entity.Login;
import com.example.blog.entity.User;
import com.example.blog.repository.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        if(userNameAlreadyExist) {
            logger.error("username already exist");
            return ResponseEntity.badRequest().body("usernameExist");
        }
        try{
            userRepo.save(user);
            logger.info("user registered successfully with credential {} ",user);
            return ResponseEntity.status(HttpStatus.OK).body("ok");
        }catch(Exception e){
            logger.error("registration failed due to {}",e.toString());
            return ResponseEntity.badRequest().body("Error");
        }
    }

    @Override
    public ResponseEntity<User> login(Login login) {
        Optional<User> user = userRepo.findByEmail(login.getEmail());
        final String[] password = {""};
        final User[] userTemp = new User[1];
        user.ifPresent(item-> {password[0] = item.getPassword(); userTemp[0] =item;});
        boolean matched = password[0].equals(login.getPassword());
        if(user.isPresent() ) {
            if(matched){
                logger.info("login successfully {}" ,user);
                return ResponseEntity.status(HttpStatus.OK).body(userTemp[0]);
            }
            logger.error("unsuccessful login attempt due to wrong password  {}", login);
            return ResponseEntity.badRequest().body(null);
        }
        logger.error("no user found using the email {}" ,login.getEmail());
        return ResponseEntity.badRequest().body(null);
    }

    @Override
    public ResponseEntity<?> getalluser() {
        try{

            return new ResponseEntity<>(this.userRepo.findAll(),HttpStatus.OK);
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(null);
        }
    }
}
