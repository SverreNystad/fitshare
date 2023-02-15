package com.pu.fitshare.server;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServerService {

    @Autowired
    private UserRepository userRepository;


    public String getHelloWorld() {
        return "Hello world";
    }

    public Optional<User> putUser(LoginAttampt loginAttampt) {
        return null;
    }

    public Optional<User> getUser(LoginAttampt loginAttampt) {
        return null;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
