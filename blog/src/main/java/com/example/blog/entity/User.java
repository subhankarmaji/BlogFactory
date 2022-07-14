package com.example.blog.entity;

import lombok.*;

import javax.persistence.*;

@Getter @Setter @NoArgsConstructor @ToString @AllArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String mobile;

    @Column(unique = true)
    private String username;

    private String password;

}
