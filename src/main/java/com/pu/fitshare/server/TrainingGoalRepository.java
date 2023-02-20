package com.pu.fitshare.server;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pu.fitshare.models.training.TrainingGoal;

/**
 * The {@code TrainingGoalRepository} is the link between the api and the database.
 * {@code TrainingGoalRepository} is connected to the {@link TrainingGoal} documents.
 * All methods called with this class will affect the database.
 */
@Repository
public interface TrainingGoalRepository extends MongoRepository<TrainingGoal, ObjectId> {
}