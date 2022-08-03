package com.example.blog.service;

import com.example.blog.entity.User;
import com.example.blog.repository.UserRepo;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class UserServiceimplTest {



    @Mock PasswordEncoder passwordEncoder;
    @InjectMocks
    @Autowired
    private UserServiceimpl userServiceimpl;


    @Mock
    private UserRepo userRepo;

    private User user1;
    private User user2;

    @AfterEach
    void tearDown() {
        userList = null;
        user1 = user2 = null;
    }

    private List<User> userList;

    @BeforeEach
    void setUp() {
        user1 = User.builder()
                .id(1)
                .name("testUser1")
                .email("test1@gmail.com")
                .mobile("4434353435")
                .username("testUser123")
                .password("hello@123")
                .build();
        user2 = User.builder()
                .id(2)
                .name("testUser2")
                .email("test2@gmail.com")
                .mobile("4421353435")
                .username("testUser223")
                .password("hello@123")
                .build();
        userList = new ArrayList<>();
        userList.add(user1);
        userList.add(user2);


    }

    @Test
    void signUp() {

        given(userRepo.existsUserByMobile(user1.getMobile())).willReturn(false);
        given(userRepo.existsUserByUsername(user1.getUsername())).willReturn(false);
        given(userRepo.existsUserByEmail(user1.getEmail())).willReturn(false);
        given(passwordEncoder.encode(user1.getPassword())).willReturn(user1.getPassword());
        ResponseEntity<String> message = userServiceimpl.signUp(user1);
        assertThat(message).isEqualTo(ResponseEntity.ok().body("ok"));

    }

    @Test
    void getalluser() {
        given(userRepo.findAll()).willReturn(userList);
        ResponseEntity<?> response = userServiceimpl.getalluser();
        assertThat(response).isEqualTo(ResponseEntity.ok().body(userList));
    }
}