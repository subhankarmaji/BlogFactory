package com.example.blog.controller;

import com.example.blog.entity.Blog;
import com.example.blog.service.BlogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
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

    @GetMapping("/blogOfTheDay")
    ResponseEntity<?> getBlogOfTheDay(){
        logger.info("getting blog of the day");
        return this.blogService.getBlogOfTheDay();
    }

}
