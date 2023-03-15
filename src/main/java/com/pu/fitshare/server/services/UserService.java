package com.pu.fitshare.server.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pu.fitshare.models.training.TrainingGoal;
import com.pu.fitshare.models.training.TrainingPlan;
import com.pu.fitshare.models.users.LoginAttempt;
import com.pu.fitshare.models.users.User;
import com.pu.fitshare.server.UserRepository;
import com.pu.fitshare.server.services.utils.StreakHandler;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public Optional<User> getUser(String id) {
		ObjectId userId = new ObjectId(id);
        return userRepository.findById(userId);
	}

	public Optional<User> getUser(ObjectId id) {
        return userRepository.findById(id);
	}

	public Optional<User> logIn(final LoginAttempt loginAttempt) {
		Optional<User> user = findUser(loginAttempt.getUsername(), loginAttempt.getPassword());
		if (user.isPresent()) {
			User updatedStreakUser = StreakHandler.handleStreak(user.get());
			userRepository.save(updatedStreakUser);
			user = Optional.of(updatedStreakUser);
		}
		return user;
	}

	public Optional<User> signUp(final LoginAttempt loginAttempt) {
		Optional<User> useruserInDb = findUser(loginAttempt.getUsername(), loginAttempt.getPassword());
		if (useruserInDb.isPresent()) {
			return Optional.empty();
		} else {
			User user = new User(loginAttempt.getUsername(), loginAttempt.getPassword());
			userRepository.insert(user);
			return Optional.of(user);
		}
	}

	private Optional<User> findUser(final String username, final String password) {
		List<User> users = getUsers();
		Optional<User> matchingUser = Optional.empty();
		for (User user : users) {
			if (user.equals(username, password)) {
				matchingUser = Optional.of(user);
			}
		}
		return matchingUser;
	}

	public User addPlanToUser(User user, TrainingPlan plan) {
		user.addPlan(plan);
		return userRepository.save(user);
	}

	public User addGoalToUser(User user, TrainingGoal goal) {
		user.addGoal(goal);
		return userRepository.save(user);
	}
}
