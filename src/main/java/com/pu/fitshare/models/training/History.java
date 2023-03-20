package com.pu.fitshare.models.training;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import lombok.AllArgsConstructor;

/**
 * The {@code History} class shall keep all the progression and keep the dates
 * with the entries.
 * 
 */
@AllArgsConstructor
public class History {
	private Map<Date, Integer> history;

	public History() {
		this.history = new HashMap<>();
	}
	public Collection<Integer> getProgression() {
		return history.values();
	}

	public void insertValue(final Date day, final int value) {
		history.put(day, (Integer) value);
	}
}