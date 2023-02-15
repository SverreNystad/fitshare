package com.pu.fitshare.server;

import org.springframework.stereotype.Service;

import com.pu.fitshare.persistence.users.LoginAttampt;

@Service
public class ServerService {

	public String getHelloWorld() {
		return "Hello world";
	}

	// public Optional<User> getUser(LoginAttampt loginAttampt) {
	// return
	// }
}
