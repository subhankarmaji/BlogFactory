package com.example.blog.service;

import com.example.blog.entity.Vote;
import org.springframework.http.ResponseEntity;

public interface VoteService  {
    ResponseEntity<String> doVote(Vote vote);
}
