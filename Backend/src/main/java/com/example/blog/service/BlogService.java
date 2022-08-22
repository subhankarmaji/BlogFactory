package com.example.blog.service;

import com.example.blog.entity.Blog;
import org.springframework.http.ResponseEntity;

public interface BlogService {
    ResponseEntity<String> addblog(Blog blog);

    ResponseEntity<?> getallblogs();

    ResponseEntity<?> getBlogOfTheDay();

    ResponseEntity<String> editBlog(Blog blog);

    ResponseEntity<String> deleteBlog(int id);
}
