package com.pu.fitshare.server;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pu.fitshare.models.training.TrainingExercise;

/**
 * The {@code TrainingExerciseRepository} is the link between the api and the database.
 * {@code TrainingExerciseRepository} is connected to the {@link TrainingExercise} documents.
 * All methods called with this class will affect the database.
 */
@Repository
public interface TrainingExerciseRepository extends MongoRepository<TrainingExercise, ObjectId> {
}