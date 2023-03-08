package com.pu.fitshare.server.services.utils;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.junit.jupiter.api.Test;

import com.pu.fitshare.models.users.User;

public class StreakHandlerTest {

	@Test
	public void doesItRemoveStreakTest() throws ParseException {
		User user = new User();
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy", Locale.ENGLISH);
		Date firstDate = sdf.parse("06/22/2017");
		user.setLastLogin(firstDate);
		user.setStreak(10);

		StreakHandler.handleStreak(user);

		assertTrue(user.getStreak() == 0, "The streak should be reset");
	}

	@Test
	public void doesNotRemoveStreakTest() throws ParseException {
		User user = new User();
		Date date = new Date();
		user.setLastLogin(date);
		user.setStreak(10);

		StreakHandler.handleStreak(user);

		assertTrue(user.getStreak() == 10, "The streak should not be reset");
	}

	@Test
	public void findCorrectDifferenceTest() throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy", Locale.ENGLISH);
		Date firstDate = sdf.parse("06/22/2017");
		Date secondDate = sdf.parse("06/30/2017");
		assertTrue(8 == StreakHandler.findDifferenceInDays(firstDate, secondDate));
	}

}
