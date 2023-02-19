package com.pu.fitshare.models.training;

import java.util.Date;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * The {@code TrainingGoal} class shall keep a goal and the progression towards
 * it and its duedate.
 */
@Document(collection = "trainingGoals")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainingGoal {

	@Id
	private ObjectId id;
	private String name;
	private String description;
	private Date dueDate;
	private TrainingType trainingType;
	private History history;

	public TrainingGoal(final String name, final String description, final Date dueDate, final String type) {
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.trainingType = TrainingType.valueOf(type);
		this.history = new History();
	}

}
