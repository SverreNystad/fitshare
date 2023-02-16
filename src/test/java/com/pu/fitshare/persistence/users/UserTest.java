package com.pu.fitshare.persistence.users;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class UserTest {

	private User user1;
	private User user2;

	@BeforeEach
	public void setup() {
		user1 = new User("Ola", "password");
		user2 = new User("Kari", "password");

	}

	@Test
	public void testEquals() {
		assertTrue(user1.equals(user1.getUsername(), user1.getPassword()), "The Users are not equals");
		assertFalse(user2.equals(user1.getUsername(), user1.getPassword()), "The Users are equals");
	}

}
