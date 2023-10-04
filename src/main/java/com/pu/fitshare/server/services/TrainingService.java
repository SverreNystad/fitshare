package com.pu.fitshare.server.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
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

	public List<TrainingSession> getSessions() {
		return sessionRepository.findAll();
	}

	public Optional<TrainingSession> getSessionById(final String id) {
        ObjectId sessionId = new ObjectId(id);
		return sessionRepository.findById(sessionId);
	}

	public Optional<TrainingGoal> createGoal(final String name, final String description, final Date dueDate,
			final String type, final String targetUnit, final int targetValue) {
		try {
			TrainingGoal goal = new TrainingGoal(name, description, dueDate, type, targetUnit, targetValue);
			return Optional.of(goalRepository.insert(goal));
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}

	public Optional<TrainingPlan> createPlan(final String name, final List<ObjectId> sessionIds) {
		try {
			TrainingPlan plan = new TrainingPlan(name);
			plan.setSessions(sessionRepository.findAllById(sessionIds));
			return Optional.of(plan);
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}

	public Optional<TrainingSession> createSession(final String name, final int duration, final String intensity,
			final String type, final String description, final String userName) {
		try {
			TrainingSession session = new TrainingSession(name, duration, intensity, type, description, userName);
			
			// session.setExercises(exerciseRepository.findAllById(excercieIds));
			return Optional.of(sessionRepository.insert(session));
		} catch (IllegalArgumentException e) {
            System.out.println("CREATE-SESSION:"+e.getLocalizedMessage());
			return Optional.empty();
		}
	}

	public Optional<TrainingExercise> createExercise(final String name, final String type) {
		try {
			TrainingExercise exercise = new TrainingExercise(name, type);
			return Optional.of(exerciseRepository.insert(exercise));
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}

	public Optional<TrainingGoal> logWorkout(final String goalId, final String workoutDate, final int maxReached) {
		ObjectId id = new ObjectId(goalId);
		
		Optional<TrainingGoal> DBGoal = goalRepository.findById(id);
		
		if (DBGoal.isPresent()) {
			TrainingGoal goal = DBGoal.get();
			
			goal.addWorkout(workoutDate, maxReached);
			
			return Optional.of(goalRepository.save(goal));
		} 
		return Optional.empty();
	}

}
