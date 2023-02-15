package com.pu.fitshare.persistence.users;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * The {@code UserRepository} is the link between the api and the database.
 * {@code UserRepository} is connected to the {@link User} documents.
 * All methods called with this class will affect the database.
 */
@Repository
public interface UserRepository extends MongoRepository<User, ObjectId> {
}
