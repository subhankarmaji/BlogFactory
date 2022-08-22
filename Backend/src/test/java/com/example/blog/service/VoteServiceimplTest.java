package com.example.blog.service;

import com.example.blog.entity.Blog;
import com.example.blog.entity.Vote;
import com.example.blog.repository.BlogRepo;
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
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class VoteServiceimplTest {

    @InjectMocks
    @Autowired
    private VoteServiceimpl voteServiceimpl;

    @Mock
    private BlogRepo blogRepo;

    private Blog blog1;

    private Blog blog2;

    private Vote vote1;

    private List<Vote> voteList;

    @BeforeEach
    void setUp() {
        blog1 = new Blog();
        blog1.setUid(1);
        blog1.setId(1);
        blog1.setTitle("test Blog");
        blog1.setContent("hello this is good blog to read");
        blog1.setDescription("this is test blog");

        vote1 = new Vote();
        vote1.setId(1);
        vote1.setBid(1);
        vote1.setUserid(1);

        voteList = new ArrayList<>();
        voteList.add(vote1);

        blog2 = new Blog();
        blog2.setUid(1);
        blog2.setId(1);
        blog2.setTitle("test Blog");
        blog2.setContent("hello this is good blog to read");
        blog2.setDescription("this is test blog");
        blog2.setVotecount(1);
        blog2.setVotes(voteList);
    }

    @AfterEach
    void tearDown() {
        voteList = null;
        vote1 = null;
         blog2 = blog1 = null;
    }

    @Test
    void doVote() {
        given(blogRepo.findById(vote1.getBid())).willReturn(Optional.of(blog1));
        given(blogRepo.save(blog1)).willReturn(blog2);
        ResponseEntity<String> response = voteServiceimpl.doVote(vote1);
        assertThat(response.toString()).isEqualTo(ResponseEntity.ok().body("vote done").toString());
    }

    @Test
    void doUnVote() {
        given(blogRepo.findById(vote1.getBid())).willReturn(Optional.of(blog2));
        given(blogRepo.save(blog2)).willReturn(blog1);
        ResponseEntity<String> response = voteServiceimpl.doVote(vote1);
        assertThat(response.toString()).isEqualTo(ResponseEntity.ok().body("unvote done").toString());
    }
}