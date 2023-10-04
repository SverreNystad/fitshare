package com.pu.fitshare.server;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pu.fitshare.models.training.TrainingPlan;

/**
 * The {@code TrainingPlanRepository} is the link between the api and the database.
 * {@code TrainingPlanRepository} is connected to the {@link TrainingPlan} documents.
 * All methods called with this class will affect the database.
 */
@Repository
public interface TrainingPlanRepository extends MongoRepository<TrainingPlan, ObjectId> {
}