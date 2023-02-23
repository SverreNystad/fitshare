package com.pu.fitshare.server;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.pu.fitshare.models.group.GroupUserRelation;


@Repository
public interface GroupUserRelationRepository extends MongoRepository<GroupUserRelation, ObjectId> {
}
