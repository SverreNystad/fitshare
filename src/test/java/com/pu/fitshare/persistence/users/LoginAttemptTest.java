package com.pu.fitshare.persistence.users;

import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class LoginAttemptTest {

	private String validUsername;
	private String validpassword;

	private String toShortPassword;

	private LoginAttempt loginAttempt;

	@BeforeEach
	public void setup() {
		validUsername = "Ola Nordmann";
		validpassword = "12345678";
		toShortPassword = "Kort";
	}

	@Test
	public void cantConstructToShortPassword() {
		Assertions.assertThrows(IllegalArgumentException.class, () -> {
			new LoginAttempt(validUsername, toShortPassword);
		}, "This LoginAttempt is not possible password to short");
	}

	@Test
	public void canConstructValidLoginAttempt() {
		try {
			new LoginAttempt(validUsername, validpassword);
		} catch (Exception e) {
			fail("There should not be any exceptions from this LoginAttempt");
		}
	}
}
