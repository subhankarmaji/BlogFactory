package com.example.blog.service;

import com.example.blog.entity.Vote;
import com.example.blog.repository.VoteRepo;
import org.springframework.http.ResponseEntity;

public interface VoteService  {
    ResponseEntity<String> doVote(Vote vote);
}
