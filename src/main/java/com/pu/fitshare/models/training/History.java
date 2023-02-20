package com.pu.fitshare.models.training;

import java.util.Collection;
import java.util.Date;
import java.util.Map;

/**
 * The {@code History} class shall keep all the progression and keep the dates
 * with the entries.
 * 
 */
public class History {
	private Map<Date, Integer> history;

	public Collection<Integer> getProgression() {
		return history.values();
	}
}
