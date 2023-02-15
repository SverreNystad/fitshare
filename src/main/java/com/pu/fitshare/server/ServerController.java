package com.pu.fitshare.server;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ServerController.API_SERVICE_PATH)
public class ServerController {
    public static final String API_SERVICE_PATH = "api/v1";

    @Autowired
    private UserService serverService;

    /**
     * The {@code Serverservice} that provide the {@code ServerController} with
     * logic for getting, updating, deleting and adding Users to data base.
     * 
     * @return Serverservice
     */
    public UserService getUserService() {
        return serverService;
    }

    @GetMapping(path = "/")
    public String getHelloString() {
        return getUserService().getHelloWorld();
    }

    @GetMapping(path = "/users/{username}/{password}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username,
            @PathVariable("password") String password) {

        try {
            LoginAttempt loginAttempt = new LoginAttempt(username, password);
            Optional<User> user = getUserService().logIn(loginAttempt);

            return presentCheck(user);

        } catch (IllegalArgumentException e) {
            System.out.println("The input was bad: " + e.getLocalizedMessage());
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }
    
    // private HttpStatus loginStatus() {


    // }

    private ResponseEntity<User> presentCheck(Optional<User> user){
        if (user.isPresent()) {
            return new ResponseEntity(user, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping(path = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        ResponseEntity<List<User>> response = new ResponseEntity(getUserService().getUsers(), HttpStatus.OK);
        return response;
    }


    

    @PutMapping(path = "/users/{username}/{password}")
    public ResponseEntity<User> putUser(@PathVariable("username") String username,
            @PathVariable("password") String password) {

        try {
            LoginAttempt loginAttempt = new LoginAttempt(username, password);
            Optional<User> createdUser = getUserService().signUp(loginAttempt);

            return presentCheck(createdUser);

        } catch (IllegalArgumentException e) {
            System.out.println("The input was bad: " + e.getLocalizedMessage());
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }
}
