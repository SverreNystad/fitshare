package com.pu.fitshare.server;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pu.fitshare.models.training.TrainingSession;

/**
 * The {@code TrainingSessionRepository} is the link between the api and the database.
 * {@code TrainingSessionRepository} is connected to the {@link TrainingSession} documents.
 * All methods called with this class will affect the database.
 */
@Repository
public interface TrainingSessionRepository extends MongoRepository<TrainingSession, ObjectId> {
}