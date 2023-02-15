package com.pu.fitshare.server;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pu.fitshare.persistence.users.LoginAttampt;
import com.pu.fitshare.persistence.users.User;

@Service
public class ServerService {

    public String getHelloWorld() {
        return "Hello world";
    }

    public Optional<User> putUser(LoginAttampt loginAttampt) {
        return null;
    }

    public Optional<User> getUser(LoginAttampt loginAttampt) {
        return null;
    }
}
