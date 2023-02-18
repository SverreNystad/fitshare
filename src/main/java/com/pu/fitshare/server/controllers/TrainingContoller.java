package com.pu.fitshare.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class TrainingContoller {

	@Autowired
	private TrainingService trainingService;

	public TrainingService getUserService() {
		return trainingService;
	}

	@GetMapping(path = "/goals")
	public ResponseEntity<TrainingGoal> getGoals() {
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@GetMapping(path = "/plans")
	public ResponseEntity<TrainingPlan> getPlans() {
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@GetMapping(path = "/sessions")
	public ResponseEntity<TrainingSession> getSessions() {
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@GetMapping(path = "/exercises")
	public ResponseEntity<TrainingExercise> getExercises() {
		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@RequestMapping(path = "/exercises/{exerciseName}")
	public ResponseEntity<TrainingExercise> addExercise(@PathVariable("exerciseName") String exerciseName) {

		return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}