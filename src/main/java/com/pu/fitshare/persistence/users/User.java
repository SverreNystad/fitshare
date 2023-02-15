package com.pu.fitshare.persistence.users;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String epost;
    private String description;

}
