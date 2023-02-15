package com.pu.fitshare.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pu.fitshare.persistence.users.LoginAttempt;
import com.pu.fitshare.persistence.users.User;
import com.pu.fitshare.persistence.users.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public Optional<User> logIn(final LoginAttempt loginAttempt) {
		return findUser(loginAttempt.getUsername(), loginAttempt.getPassword());
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
}
