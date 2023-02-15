package com.pu.fitshare.persistence.users;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * The {@code User} class represnts the Users of FitShare. It contains all the
 * data about a user that will be sent over to the UI.
 */
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

    public User(final String username, final String password) {
        this.username = username;
        this.password = password;
    }

    public boolean equals(final String username, final String password) {
        return this.getUsername().equals(username) && this.getPassword().equals(password);
    }
}
