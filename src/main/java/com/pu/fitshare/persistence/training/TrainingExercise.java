package com.pu.fitshare.persistence.training;

import org.bson.types.ObjectId;

public class TrainingExercise {

    enum trainingType {
        STRENGTH,
        ENDURANCE
    }

    enum trainingIntensity{
        LOW,
        MEDIUM,
        HIGH
    }

    private ObjectId _id;
    private String name;
    private trainingType type;
    private trainingIntensity intensity;

    public boolean idEquals(ObjectId id) {
        return (_id==id);
    }

}