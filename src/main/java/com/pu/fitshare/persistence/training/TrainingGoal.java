package com.pu.fitshare.persistence.training;

import java.util.Date;

import org.bson.types.ObjectId;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "trainingGoals")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainingGoal {

	private ObjectId id;
	private String name;

	private Date dueDate;
}
