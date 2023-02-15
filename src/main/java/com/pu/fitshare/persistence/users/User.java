package com.pu.fitshare.persistence.users;

// import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {
    @Id
    private ObjectId id;
    private String name;
    private String password;

    // private String firstName;
    // private String lastName;
    
    // private Date birthday;
    // private String description;
    // private List<TrainingGoal> goals;


    // public User(final int id, final String firstName, final String lastName, final Date birthday) {
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.birthday = birthday;
    // }


}
