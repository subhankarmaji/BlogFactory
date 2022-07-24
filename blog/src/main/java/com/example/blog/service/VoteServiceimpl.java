package com.example.blog.service;

import com.example.blog.entity.Blog;
import com.example.blog.entity.Vote;
import com.example.blog.repository.BlogRepo;
import com.example.blog.repository.VoteRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoteServiceimpl implements VoteService {
    Logger logger = LoggerFactory.getLogger(VoteServiceimpl.class);

    @Autowired
    private VoteRepo voteRepo;

    @Autowired
    private BlogRepo blogRepo;

    @Override
    public ResponseEntity<String> doVote(Vote vote) {
        try {
            final Blog[] blogs = new Blog[1];
            Optional<Blog> blog = this.blogRepo.findById(vote.getBid());
            blog.ifPresent(item -> {
                blogs[0] = item;
            });
            List<Vote> tempVotes = blogs[0].getVotes();
            boolean present = false;
            Vote preVote = null;
            for(Vote v : tempVotes){
                if(v.getUserid()== vote.getUserid()) {
                    preVote = v;
                    present=true;
                    break;
                }
            }
            if(tempVotes==null || !present) {
                blogs[0].getVotes().add(vote);
                blogs[0].setVotecount(blogs[0].getVotecount() + 1);
                this.blogRepo.save(blogs[0]);
                logger.info("vote complete for user {}", vote.getUserid());
                return ResponseEntity.status(HttpStatus.OK).body("vote done");
            }else if(present){
                logger.warn("unvoting blog {} by user {}",vote.getBid(),vote.getUserid());
                blogs[0].getVotes().remove(preVote);
                blogs[0].setVotecount(blogs[0].getVotecount()-1);
                this.blogRepo.save(blogs[0]);
                return ResponseEntity.status(HttpStatus.OK).body("unvote done");
            }
        }
        catch(Exception e){
            logger.error("failed voting due {}",e.toString());
            return ResponseEntity.badRequest().body("try again");
        }
        return null;
    }
}
