package com.example.blog.service;

import com.example.blog.entity.Login;
import com.example.blog.entity.User;
import com.example.blog.repository.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class UserServiceimpl implements UserService{
    private final Logger logger = LoggerFactory.getLogger(UserServiceimpl.class);
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
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
            user.setPassword(passwordEncoder.encode(user.getPassword()));
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

    @Override
    public InputStream getResource(String path, String fileName) {
        try{
            logger.info("serving picture");
            String fullPath = path+File.separator+fileName;
            InputStream is = new FileInputStream(fullPath);
            return is;
        }catch (Exception e){
            logger.error("picture not found");
            return null;
        }

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = this.userRepo.findByEmail(username);
        final User[] userTemp = new User[1];
        user.ifPresent(item-> {userTemp[0]=item;});
        if(userTemp[0]==null){
            throw new UsernameNotFoundException("user not found");
        }
        return new org.springframework.security.core.userdetails.User(userTemp[0].getEmail(),userTemp[0].getPassword(),new ArrayList<>());
    }
}
