package com.example.blog.entity;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class Login {
    private String email;
    private String password;
}
