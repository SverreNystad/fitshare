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
    private ServerService serverService;

    /**
     * The {@code Serverservice} that provide the {@code ServerController} with
     * logic for getting, updating, deleting and adding Users to data base.
     * 
     * @return Serverservice
     */
    public ServerService getServerService() {
        return serverService;
    }

    @GetMapping(path = "/")
    public String getHelloString() {
        return getServerService().getHelloWorld();
    }

    @GetMapping(path = "/users/{username}/{password}")
    public ResponseEntity<User> logIn(@PathVariable("username") String username,
            @PathVariable("password") String password) {

        try {
            LoginAttampt loginAttampt = new LoginAttampt(username, password);
            // Optional<User> user = getServerService().getUser(loginAttampt);
        } catch (IllegalArgumentException e) {
            // TODO: handle exception
        }

        return new ResponseEntity(null, null);
    }
    // private HttpStatus loginStatus() {

    // }
    @GetMapping(path = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        ResponseEntity<List<User>> response = new ResponseEntity(getServerService().getUsers(), HttpStatus.OK);
        return response;
    }


    

    @PutMapping(path = "/users/{username}/{password}")
    public ResponseEntity<User> signUp(@PathVariable("username") String username,
            @PathVariable("password") String password) {

        try {
            LoginAttampt loginAttampt = new LoginAttampt(username, password);
            Optional<User> createdUser = getServerService().putUser(loginAttampt);
        } catch (IllegalArgumentException e) {
            // TODO: handle exception
        }

        return new ResponseEntity(null, null);
    }
}
