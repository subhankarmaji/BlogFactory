package com.example.blog.repository;

import com.example.blog.entity.Blog;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class BlogRepoTest {

    @Autowired
    private BlogRepo blogRepo;

    private Blog actualBlog;

    @BeforeEach
    void setUp() {
        actualBlog = new Blog();
        actualBlog.setId(1);
        actualBlog.setTitle("hello");
        blogRepo.save(actualBlog);
    }

    @AfterEach
    void tearDown() {
        blogRepo.deleteAll();
        actualBlog= null;
    }

    @Test
    void findById() {

        Blog blogAct = actualBlog;
        Optional<Blog> blog = blogRepo.findById(actualBlog.getId());
        final Blog[] blogExpected = new Blog[1];
        blog.ifPresent((item)->blogExpected[0]=item);
        assertThat(blogAct.toString()).isEqualTo(blogExpected[0].toString());
    }
}