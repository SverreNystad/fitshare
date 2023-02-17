package com.pu.fitshare.persistence.training;

import java.util.ArrayList;

import org.bson.types.ObjectId;

public class TrainingSession {

    private ObjectId _id;
    private Integer duration;
    private ArrayList<TrainingExercise> exercises;

    public boolean idEquals(ObjectId id) {
        return (_id==id);
    }

}
