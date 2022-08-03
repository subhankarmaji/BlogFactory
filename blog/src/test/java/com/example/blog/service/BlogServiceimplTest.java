package com.example.blog.service;

import com.example.blog.entity.Blog;
import com.example.blog.entity.Blogpojo;
import com.example.blog.entity.User;
import com.example.blog.repository.BlogRepo;
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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class BlogServiceimplTest {

    @InjectMocks
    @Autowired
    private BlogServiceimpl blogServiceimpl;

    @Mock
    private BlogRepo blogRepo;

    @Mock
    private UserRepo userRepo;

    private User user1;
    private User userWithBlog;

    private Blog blog1;


    private List<Blog> blogList;


    private Blogpojo blogpojo;

    private List<Blogpojo> blogpojoList;

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

        blog1 = new Blog();
        blog1.setUid(1);
        blog1.setId(1);
        blog1.setTitle("test Blog");
        blog1.setContent("hello this is good blog to read");
        blog1.setDescription("this is test blog");


        blogList = new ArrayList<>();
        blogList.add(blog1);

        blogpojo = new Blogpojo();
        blogpojo.setId(blog1.getId());
        blogpojo.setTitle(blog1.getTitle());
        blogpojo.setDesc(blog1.getDescription());
        blogpojo.setContent(blog1.getContent());
        blogpojo.setAuthorid(user1.getId());
        blogpojo.setAuthor(user1.getName());
        blogpojo.setVoters(new ArrayList<>());

        blogpojoList = new ArrayList<>();
        blogpojoList.add(blogpojo);
    }

    @AfterEach
    void tearDown() {
        blog1 = null;
        user1 = null;
        blogList = null;
        blogpojo = null;
    }

    @Test
    void addblog() {
        given(userRepo.findById(blog1.getUid())).willReturn(Optional.of(user1));
        userWithBlog = user1;
        userWithBlog.setBlogs(blogList);
        given(userRepo.save(userWithBlog)).willReturn(userWithBlog);
        ResponseEntity<String> response = blogServiceimpl.addblog(blog1);
        assertThat(response).isEqualTo(ResponseEntity.ok().body("Blog saved "));
    }

    @Test
    void createblog() {
        given(userRepo.findById(blog1.getUid())).willReturn(Optional.of(user1));
        Blogpojo blogpojo1 = blogServiceimpl.createblog(blog1);
        assertThat(blogpojo1.toString()).isEqualTo(blogpojo.toString());
    }

    @Test
    void getallblogs() {
        given(userRepo.findById(blog1.getUid())).willReturn(Optional.of(user1));
        given(blogRepo.findAll()).willReturn(blogList);
        ResponseEntity<?> response = blogServiceimpl.getallblogs();
        assertThat(response.toString()).isEqualTo(ResponseEntity.ok().body(blogpojoList).toString());

    }

    @Test
    void getBlogOfTheDay() {
        
    }

    @Test
    void editBlog() {
    }

    @Test
    void deleteBlog() {
    }
}