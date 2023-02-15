package com.pu.fitshare.persistence.users;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    private int id;
    private String firstName;
    private String lastName;
    
    private Date birthday;
    // private String description;
    // private List<TrainingGoal> goals;


    public User(final int id, final String firstName, final String lastName, final Date birthday) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }


}
