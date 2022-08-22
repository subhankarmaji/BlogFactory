package com.example.blog.security;
import com.example.blog.entity.User;
import lombok.*;

@Getter @AllArgsConstructor @NoArgsConstructor @Data @Setter
public class JwtAuthResponse {
    private String token;
    private User user;

}
