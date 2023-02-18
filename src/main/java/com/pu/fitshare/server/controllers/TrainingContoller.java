package com.pu.fitshare.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pu.fitshare.models.training.TrainingPlan;
import com.pu.fitshare.server.services.TrainingService;

@RestController
public class TrainingContoller {

	@Autowired
	private TrainingService trainingService;

	public TrainingService getUserService() {
		return trainingService;
	}

	@GetMapping(path = "/plans")
	public ResponseEntity<TrainingPlan> getPlans() {

	}
}