package com.example.blog.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter @NoArgsConstructor @ToString @AllArgsConstructor
@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String description;

    @Lob
    private String content;

    private int uid;

    private String dateofpublish;

    private int votecount;

    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "blogid", referencedColumnName = "id")
    private List<Vote> votes = new ArrayList<>();
}
