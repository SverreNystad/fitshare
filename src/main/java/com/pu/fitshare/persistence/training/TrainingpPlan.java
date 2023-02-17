package com.pu.fitshare.persistence.training;

import java.util.ArrayList;

import org.bson.types.ObjectId;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "trainingGoals")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainingpPlan {

    private ObjectId id;
    private String name;
    private ArrayList<TrainingSession> sessions;

    public void removeSession(ObjectId id){
        for (TrainingSession sesh: sessions) {
            if (sesh.idEquals(id)){
                sessions.remove(sesh);
            }
          }
    }
}
