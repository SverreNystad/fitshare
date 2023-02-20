package com.pu.fitshare.models.training;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "trainingPlan")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainingPlan {

    @Id
    private ObjectId id;
    private String name;
    private List<TrainingSession> sessions;

    public TrainingPlan(final String name) {
        this.name = name;
    }

    public void removeSession(ObjectId id) {
        for (TrainingSession sesh : sessions) {
            if (sesh.idEquals(id)) {
                sessions.remove(sesh);
            }
        }
    }

}
