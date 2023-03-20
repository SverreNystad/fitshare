package com.pu.fitshare.server.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pu.fitshare.models.group.Group;
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
	@Autowired
	private GroupService groupService;

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

	/**
	 * Finds all groups the user is part of
	 * @param id
	 * @return List of groups
	 */
	public List<Group> getGroups(String id) {
		ObjectId userId = new ObjectId(id);
		List<Group> groups = new ArrayList<Group>(groupService.getGroups());
		for (Group group:groups){
			if(!group.getUsers().contains(userId)){
				groups.remove(group);
			}
		}
        return groups;
	}
	/**
	 * Takes in the userId of a user and returns all the goals the groups of that user has.
	 * @param userId
	 * @return List of goals from various groups
	 */
	public List<TrainingGoal> getGroupGoals(String userId){
		List<Group> groups = getGroups(userId);
		List<TrainingGoal> goals = new ArrayList<TrainingGoal>();
		for (Group group:groups){
			if (group.getGoal()!=null){
				goals.add(group.getGoal());
			}
		}
		return goals;
	}
}
