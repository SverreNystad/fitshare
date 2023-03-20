package com.pu.fitshare.server.controllers;

import java.io.Console;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pu.fitshare.models.training.TrainingExercise;
import com.pu.fitshare.models.training.TrainingGoal;
import com.pu.fitshare.models.training.TrainingPlan;
import com.pu.fitshare.models.training.TrainingSession;
import com.pu.fitshare.models.users.User;
import com.pu.fitshare.server.services.TrainingService;
import com.pu.fitshare.server.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TrainingContoller {

	@Autowired
	private TrainingService trainingService;
	@Autowired
	private UserService userService;

	public TrainingService getTrainingService() {
		return trainingService;
	}

	@GetMapping(path = "/goals")
	public ResponseEntity<List<TrainingGoal>> getGoals() {
		return new ResponseEntity<>(getTrainingService().getGoals(), HttpStatus.OK);
	}

	@GetMapping(path = "/plans")
	public ResponseEntity<List<TrainingPlan>> getPlans() {
		return new ResponseEntity<>(getTrainingService().getPlans(), HttpStatus.OK);
	}

	@GetMapping(path = "/sessions")
	public ResponseEntity<List<TrainingSession>> getSessions() {
		return new ResponseEntity<>(getTrainingService().getSessions(), HttpStatus.OK);
	}

	@GetMapping(path = "/session/{id}")
	public ResponseEntity<TrainingSession> getSessionById(@PathVariable String id) {
		return new ResponseEntity<>(getTrainingService().getSessionById(id).get(), HttpStatus.OK);
	}

	@GetMapping(path = "/exercises")
	public ResponseEntity<List<TrainingExercise>> getExercises() {
		return new ResponseEntity<>(getTrainingService().getExercises(), HttpStatus.OK);
	}

	@RequestMapping(path = "/sessions/{name}/{duration}/{intesity}/{type}/{description}")
	public ResponseEntity<TrainingExercise> createSession(@PathVariable("name") String name, @PathVariable("duration") int duration, @PathVariable("intesity") String intesity, @PathVariable("type") String type, @PathVariable("description") String description){
		try {
			Optional<TrainingSession> session = getTrainingService().createSession(name, duration, intesity, type, description);
			if (session.isPresent()) {
				return new ResponseEntity(session.get(), HttpStatus.OK);
			}
			else {
				return new ResponseEntity(session.empty(), HttpStatus.BAD_REQUEST);
			}
		} catch (IllegalArgumentException e) {
			System.out.println("The input was bad: " + e.getLocalizedMessage());
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(path = "/goal/{userId}/{goalName}/{description}/{dueDate}/{type}")
	public ResponseEntity<TrainingGoal> addGoal(@PathVariable("userId") String userId, @PathVariable("goalName") String goalName, @PathVariable("description") String description, @PathVariable("dueDate") String dueDate, @PathVariable("type") String type) {
		String pattern = "MM-dd-yyyy";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern, Locale.ENGLISH);
		Date newdate;

		try {
			newdate = simpleDateFormat.parse(dueDate);
		} catch (ParseException e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}

		Optional<TrainingGoal> goal = getTrainingService().createGoal(goalName, description, newdate, type);
		
		if (goal.isPresent()) {
			Optional<User> user = userService.getUser(userId);
			if(user.isPresent()){
				userService.addGoalToUser(user.get(), goal.get());
			}else{
				return new ResponseEntity<>(goal.get(), HttpStatus.INTERNAL_SERVER_ERROR);
			}
			return new ResponseEntity<>(goal.get(), HttpStatus.OK);
		}
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@RequestMapping(path = "/plans/{userId}/{plan}")
	public ResponseEntity<TrainingExercise> addPlanToUser(@PathVariable("userId") ObjectId userId ) {
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}