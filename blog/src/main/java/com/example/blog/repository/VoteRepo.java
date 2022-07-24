package com.example.blog.repository;

import com.example.blog.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoteRepo extends JpaRepository<Vote,Integer> {
}
