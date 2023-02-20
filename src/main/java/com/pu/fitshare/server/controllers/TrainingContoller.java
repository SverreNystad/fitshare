package com.pu.fitshare.server.controllers;

import java.util.List;

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
import com.pu.fitshare.server.services.TrainingService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TrainingContoller {

	@Autowired
	private TrainingService trainingService;

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

	@GetMapping(path = "/exercises")
	public ResponseEntity<List<TrainingExercise>> getExercises() {
		return new ResponseEntity<>(getTrainingService().getExercises(), HttpStatus.OK);
	}

	@RequestMapping(path = "/exercises/{exerciseName}")
	public ResponseEntity<TrainingExercise> addExercise(@PathVariable("exerciseName") String exerciseName) {
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}