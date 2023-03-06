package com.pu.fitshare.server.services.utils;

import java.util.Date;
import java.util.concurrent.TimeUnit;

import com.pu.fitshare.models.users.User;

public class StreakHandler {

	/*
	 * If the difference is larger than 2 days set streak to 0
	 * If the difference is larger than 1 then add day to streak
	 */

	public static User handleStreak(User u) {
		Date currenDate = new Date();
		Date lastLogin = u.getLastLogin();
		if (u.getLastLogin() == null) {
			lastLogin = new Date();
			u.setLastLogin(new Date());
		}

		int daysSinceLastLogin = findDifferenceInDays(currenDate, lastLogin);

		if (daysSinceLastLogin >= 1) {
			u.setStreak(u.getStreak() + 1);
			u.setLastLogin(new Date());
		}

		if (daysSinceLastLogin >= 2) {
			u.setStreak(0);
		}
		return u;
	}

	public static int findDifferenceInDays(final Date firstDate, final Date secondDate) {
		long diffInMillies = Math.abs(secondDate.getTime() - firstDate.getTime());
		long differenceInDays = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
		return (int) differenceInDays;
	}
}
