package com.example.blog.repository;

import com.example.blog.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
    boolean existsUserByEmail(String email);
    boolean existsUserByMobile(String mobile);
    boolean existsUserByUsername(String username);

    Optional<User> findByEmail(String email);

    Optional<User> findById(Integer id);
}
