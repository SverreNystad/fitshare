package com.pu.fitshare.persistence.users;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.pu.fitshare.models.users.User;

public class UserTest {

	private User user1;
	private User user2;
	private User userWithObjectID;

	@BeforeEach
	public void setup() {
		user1 = new User("Ola", "password");
		user2 = new User("Kari", "password");
		userWithObjectID = new User(new ObjectId(), "Ola", "password", null, null);

	}

	@Test
	public void testEqualsWithUsernameAndPassword() {
		assertTrue(user1.equals(user1.getUsername(), user1.getPassword()), "The Users are not equals");
		assertFalse(user2.equals(user1.getUsername(), user1.getPassword()), "The Users are equals");
	}

	@Test
	public void testEqualsWithObjectId() {
		assertTrue(userWithObjectID.equals(userWithObjectID), "The Users are not the same");
		assertFalse(userWithObjectID.equals(user1), "The Users are the same");
		assertFalse(userWithObjectID.equals(user2), "The Users are the same");
	}
}
