package com.example.blog.service;

import com.example.blog.entity.Blog;
import com.example.blog.entity.Blogpojo;
import com.example.blog.entity.User;
import com.example.blog.repository.BlogRepo;
import com.example.blog.repository.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BlogServiceimpl implements BlogService{

    @Autowired
    private BlogRepo blogRepo;

    @Autowired
    private UserRepo userRepo;

    private Logger logger = LoggerFactory.getLogger(BlogServiceimpl.class);
    @Override
    public ResponseEntity<String> addblog(Blog blog) {
        try{
            Optional<User> user = this.userRepo.findById(blog.getUid());
            final User[] userTemp = new User[1];
            user.ifPresent(item-> userTemp[0] =item);

            //adding blog to user end
            userTemp[0].getBlogs().add(blog);
            this.userRepo.save(userTemp[0]);
            logger.info("user saved in user's profile");
            return ResponseEntity.ok("Blog saved ");
        }catch (Exception e){
            logger.error("blog can't saved due to {}",e.toString());
            return ResponseEntity.badRequest().body("Something wrong happen try again");
        }
    }

    public Blogpojo createblog(Blog b){
        Blogpojo temp = new Blogpojo();
        temp.setId(b.getId());
        temp.setTitle(b.getTitle());
        temp.setDesc(b.getDescription());
        temp.setContent(b.getContent());
        temp.setDateofpublish(b.getDateofpublish());
        temp.setVotes(b.getVotecount());
        temp.setVoters(b.getVotes());
        Optional<User> user = this.userRepo.findById(b.getUid());
        final User[] userTemp = new User[1];
        user.ifPresent(item-> userTemp[0] =item);
        temp.setAuthorid(userTemp[0].getId());
        temp.setAuthor(userTemp[0].getName());
        temp.setAuthorpic(userTemp[0].getUserimg());
        return temp;
    }
    @Override
    public ResponseEntity<?> getallblogs() {
        try{
            logger.info("fetching all blogs....");
            List<Blog> blogs = this.blogRepo.findAll();
            List<Blogpojo> allblogs = new ArrayList<>();
            for(Blog b : blogs){
                allblogs.add(createblog(b));
            }

            logger.info("fetched all blogs");
            return new ResponseEntity<>(allblogs, HttpStatus.OK) ;
        }catch (Exception e){
            logger.error("failed to fetch");
            return  ResponseEntity.badRequest().body("try again !");
        }
    }

    @Override
    public ResponseEntity<?> getBlogOfTheDay() {
        try {
            List<Blog> blogs = this.blogRepo.findAll();
            if(blogs.isEmpty()) return new ResponseEntity<>(new Blogpojo(),HttpStatus.OK);
            int mostVote = 0;
            Blog blogOfTheDay = null;
            for (Blog b : blogs) {
                if (mostVote <= b.getVotecount()) {
                    mostVote = b.getVotecount();
                    blogOfTheDay = b;
                }
            }
            logger.info("fetch blog of the day!!");
            return new ResponseEntity<>(createblog(blogOfTheDay),HttpStatus.OK);
        }catch (Exception e){
            logger.error("can't fetch the blog due to {}",e.toString());
            return ResponseEntity.badRequest().body("something went wrong!");
        }

    }

    @Override
    public ResponseEntity<String> editBlog(Blog blog) {
        try{
            Optional<Blog> preBlog = this.blogRepo.findById(blog.getId());
            final Blog[] blogTemp = new Blog[1];
            preBlog.ifPresent(item->blogTemp[0]=item);
            logger.info("Last edited date of this blog was {}",blogTemp[0].getDateofpublish());
            blogTemp[0].setTitle(blog.getTitle());
            blogTemp[0].setDescription(blog.getDescription());
            blogTemp[0].setContent(blog.getContent());
            blogTemp[0].setDateofpublish(blog.getDateofpublish());
            this.blogRepo.save(blogTemp[0]);
            logger.info("blog edited successfully on {}",blogTemp[0].getDateofpublish());
            return ResponseEntity.ok("blog edited successfully");
        }catch (Exception e){
            return ResponseEntity.badRequest().body("exception happened");
        }
    }

    @Override
    public ResponseEntity<String> deleteBlog(int id) {
        try{
            Optional<Blog> preBlog = this.blogRepo.findById(id);
            final Blog[] blogTemp = new Blog[1];
            preBlog.ifPresent(item->blogTemp[0]=item);
            if(blogTemp[0]==null) {
                logger.error("can't find any blog of id {}",id);
                return ResponseEntity.badRequest().body("not found");
            }
            this.blogRepo.delete(blogTemp[0]);
            logger.info("blog deleted successfully");
            return ResponseEntity.ok("deleted");
        }catch (Exception e){
            logger.error("failed delete operation for {}",e.getMessage());
            return ResponseEntity.badRequest().body("exception happened");
        }
    }
}
