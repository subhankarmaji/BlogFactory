package com.example.blog.controller;

import com.example.blog.entity.Blog;
import com.example.blog.entity.Blogpojo;
import com.example.blog.service.BlogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BlogController {

    @Autowired
    private BlogService blogService;
    private final Logger logger = LoggerFactory.getLogger(BlogController.class);

    @PostMapping("/addblog")
    ResponseEntity<String> addblog(@RequestBody Blog blog){
        logger.info("submitting blog from userid {}",blog.getUid());
        return this.blogService.addblog(blog);
    }
    @GetMapping("/getallblogs")
    ResponseEntity<?> getallblogs(){
        logger.info("request for all blogs");
        return this.blogService.getallblogs();
    }

    @PutMapping("/editBlog")
    ResponseEntity<String> editBlog(@RequestBody Blog blog){
        logger.info("Edit started for blog {} by user {}",blog.getId(),blog.getUid());
        return this.blogService.editBlog(blog);
    }

    @DeleteMapping("/deleteBlog/{id}")
    ResponseEntity<String> deleteBlog(@PathVariable String id){
        logger.warn("delete blog request for id {}",id);
        return this.blogService.deleteBlog(Integer.parseInt(id));
    }

    @GetMapping("/blogOfTheDay")
    ResponseEntity<?> getBlogOfTheDay(){
        logger.info("getting blog of the day");
        return this.blogService.getBlogOfTheDay();
    }

}
