package com.example.blog.repository;

import com.example.blog.entity.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class UserRepoTest {

    @Autowired
    private UserRepo userRepo;

    private User actualUser;
    @BeforeEach
    void setUp() {
        actualUser= User.builder()
                .id(1)
                .name("test user")
                .email("test@gmail.com")
                .password("hello@te12")
                . mobile("2342324232")
                .username("testUser")
                .build();

        userRepo.save(actualUser);
    }

    @AfterEach
    void tearDown() {
        userRepo.deleteAll();
        actualUser = null;
    }

    @Test
    void existsUserByEmail() {
        String email = actualUser.getEmail();
        boolean testRes = userRepo.existsUserByEmail(email);
        assertThat(testRes).isTrue();
    }

    @Test
    void existsUserByMobile() {
        String mobile = actualUser.getMobile();
        String mobiletest = "3423242323";
        boolean testRes = userRepo.existsUserByMobile(mobile);
        boolean test2 = userRepo.existsUserByMobile(mobiletest);
        assertThat(testRes).isTrue();
        assertThat(test2).isFalse();
    }

    @Test
    void existsUserByUsername() {
        String usernameAct = actualUser.getUsername();
        String usernameAct2 = "fakeValue";
        boolean testRes1 = userRepo.existsUserByUsername(usernameAct);
        boolean testRes2 = userRepo.existsUserByUsername(usernameAct2);
        assertThat(testRes1).isTrue();
        assertThat(testRes2).isFalse();
    }

    @Test
    void findByEmail() {
        User userAct = actualUser;
        Optional<User> user = userRepo.findByEmail(userAct.getEmail());
        final User[] userTest = new User[1];
        user.ifPresent((item)->userTest[0]=item);
        assertThat(userAct.toString()).isEqualTo(userTest[0].toString());
    }

    @Test
    void findById() {

        User userAct = actualUser;
        Optional<User> user = userRepo.findById(userAct.getId());
        final User[] userTest = new User[1];
        user.ifPresent((item)->userTest[0]=item);
        assertThat(userAct.toString()).isEqualTo(userTest[0].toString());
    }
}