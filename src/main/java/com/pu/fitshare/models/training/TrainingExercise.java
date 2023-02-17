package com.pu.fitshare.models.training;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "trainingExercise")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainingExercise {


    @Id
    private ObjectId id;
    
    private String name;
    private TrainingType type;
    private TrainingIntensity intensity;

    public boolean idEquals(ObjectId id) {
        return this.getId().equals(id);
    }


}