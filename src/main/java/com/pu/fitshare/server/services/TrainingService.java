package com.pu.fitshare.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pu.fitshare.models.training.TrainingExercise;
import com.pu.fitshare.models.training.TrainingGoal;
import com.pu.fitshare.models.training.TrainingPlan;
import com.pu.fitshare.models.training.TrainingSession;
import com.pu.fitshare.server.TrainingExerciseRepository;
import com.pu.fitshare.server.TrainingGoalRepository;
import com.pu.fitshare.server.TrainingPlanRepository;
import com.pu.fitshare.server.TrainingSessionRepository;

@Service
public class TrainingService {

	@Autowired
	private TrainingExerciseRepository exerciseRepository;
	@Autowired
	private TrainingGoalRepository goalRepository;
	@Autowired
	private TrainingPlanRepository planRepository;
	@Autowired
	private TrainingSessionRepository sessionRepository;

	public List<TrainingExercise> getExercises() {
		return exerciseRepository.findAll();
	}

	public List<TrainingGoal> getGoals() {
		return goalRepository.findAll();
	}

	public List<TrainingPlan> getPlans() {
		return planRepository.findAll();
	}

	public List<TrainingSession> Sessions() {
		return sessionRepository.findAll();
	}
}
