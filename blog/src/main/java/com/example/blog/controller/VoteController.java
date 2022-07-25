package com.example.blog.controller;

import com.example.blog.entity.Vote;
import com.example.blog.repository.VoteRepo;
import com.example.blog.service.VoteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VoteController {
    Logger logger = LoggerFactory.getLogger(VoteController.class);
    @Autowired
    private VoteService voteService;

    @PostMapping("/doVote")
    ResponseEntity<String> doVote(@RequestBody Vote vote){
        logger.info("voting start");
        return this.voteService.doVote(vote);
    }
}
