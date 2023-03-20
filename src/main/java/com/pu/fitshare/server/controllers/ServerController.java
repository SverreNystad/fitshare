package com.pu.fitshare.server.controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pu.fitshare.models.training.TrainingGoal;
import com.pu.fitshare.models.users.LoginAttempt;
import com.pu.fitshare.models.users.User;
import com.pu.fitshare.server.services.TrainingService;
import com.pu.fitshare.server.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ServerController {

    @Autowired
    private UserService userService;

    @Autowired
    private TrainingService trainingService;

    /**
     * The {@code UserService} that provide the {@code ServerController} with
     * logic for getting, updating, deleting and adding {@link User}s to database.
     * 
     * @return userService
     */
    public UserService getUserService() {
        return userService;
    }

    public TrainingService getTrainingService() {
        return trainingService;
    }

    /**
     * the getUser method will fetch the first {@link User} found in the database.
     * This {@link User} will be sent with the corresponding HTTP staus code.
     * 
     * @param username to searche the database with
     * @param password to searche the database with
     * @return first user to correspond with given credentials
     */
    @RequestMapping(path = "/users/login/{username}/{password}")
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

    private ResponseEntity<User> presentCheck(Optional<User> user) {
        if (user.isPresent()) {
            return new ResponseEntity(user, HttpStatus.OK);
        } else {
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        ResponseEntity<List<User>> response = new ResponseEntity(getUserService().getUsers(), HttpStatus.OK);
        return response;
    }

    @RequestMapping(path = "/users/signup/{username}/{password}")
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

    @RequestMapping(path = "/user/{userID}/{goalID}/{date}/{currentValue}")
    public ResponseEntity<User> updateUserGoal(@RequestParam("userID") String userId, @RequestParam("goalID") String goalId, @RequestParam("date") String date, @RequestParam("currentValue") int currentValue) {
        String pattern = "MM-dd-yyyy";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern, Locale.ENGLISH);
		Date newdate;

		try {
			newdate = simpleDateFormat.parse(date);
		} catch (ParseException e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}

        try {
            Optional<User> userInDB = getUserService().getUser(userId);
            Optional<TrainingGoal> goalInDB = getTrainingService().logWorkout(goalId, newdate, currentValue);

            if (userInDB.isPresent()) {
                User user = userInDB.get();
                if (goalInDB.isPresent()) {
                    User savedUser = getUserService().updateGoalToUser(user, goalInDB.get());
                    return new ResponseEntity<>(savedUser, HttpStatus.OK);
                }
                return new ResponseEntity<>(user, HttpStatus.BAD_REQUEST);
            }

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

    }

}
