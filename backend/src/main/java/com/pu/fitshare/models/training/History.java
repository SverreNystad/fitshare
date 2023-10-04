package com.pu.fitshare.models.training;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * The {@code History} class shall keep all the progression and keep the dates
 * with the entries.
 * 
 */
@Data
@AllArgsConstructor
public class History {
	private List<String> dates;
	private List<Integer> workouts;


	public History() {
		this.dates = new ArrayList<>();
		this.workouts = new ArrayList<>();
	}

	public void insertValue(final String day, final int value) {
		this.dates.add(day);
		this.workouts.add((Integer) value);
	}
}
