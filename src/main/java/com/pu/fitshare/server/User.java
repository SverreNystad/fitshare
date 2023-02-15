package com.pu.fitshare.server;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;
    private String username;
    private String password;
    
    private Date birthday;
    private String description;
    // private List<TrainingGoal> goals;

    public User(final String username, final String password) {
        this.username = username;
        this.password = password;
    }

    public boolean equals(final String username, final String password) {
        return this.getUsername().equals(username) && this.getPassword().equals(password);
    }
}
