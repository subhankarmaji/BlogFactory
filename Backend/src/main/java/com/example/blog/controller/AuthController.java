package com.example.blog.controller;

import com.example.blog.entity.Login;
import com.example.blog.entity.User;
import com.example.blog.repository.UserRepo;
import com.example.blog.security.JwtAuthResponse;
import com.example.blog.security.JwtTokenOperation;
import com.example.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepo userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenOperation jwtTokenOperation;

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody Login authenticationRequest) throws Exception {

        try {
            authenticate(authenticationRequest.getEmail(), authenticationRequest.getPassword());
        }catch (UsernameNotFoundException e){
            e.printStackTrace();
            throw new Exception("Username not found");
        }


        //final area
        final UserDetails userDetails = this.userService.loadUserByUsername(authenticationRequest.getEmail());
        System.out.println(userDetails.toString());
        Optional<User> userTemp = this.userRepository.findByEmail(authenticationRequest.getEmail());
        final User[] userArr = new User[1];
        userTemp.ifPresent((item)->{userArr[0]=item;});
        final User user = userArr[0];
        final String token = jwtTokenOperation.generateToken(userDetails);
        System.out.println(token);

        return ResponseEntity.ok(new JwtAuthResponse(token, user));
    }
    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED"+ e.getMessage());
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS"+ e.getMessage());
        }
    }
}
