package com.example.blog.entity;

import lombok.*;

import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class Blogpojo {
    private int id;
    private String title;
    private String author;
    private String authorpic;
    private String desc;
    private String content;
    private String dateofpublish;
    private int votes;
    private List<Vote> voters ;

}
