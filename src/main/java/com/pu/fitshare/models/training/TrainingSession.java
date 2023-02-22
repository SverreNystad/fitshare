package com.pu.fitshare.models.training;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "trainingSession")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainingSession {

    @Id
    private ObjectId id;
    private String name;
    private int duration;
    private TrainingIntensity intensity;
    private String exercise;
    // private List<TrainingExercise> exercises;
    private String description;

    public TrainingSession(final String name, final int duration, final String intensity) {
        this.name = name;
        this.duration = duration;
        this.intensity = TrainingIntensity.valueOf(intensity);
    }

    public TrainingSession(final String name, final int duration, final String intensity, final String exercise, final String description) {
        this.name = name;
        this.duration = duration;
        this.intensity = TrainingIntensity.valueOf(intensity);
        this.exercise = exercise;
        this.description = description;
    }

    public boolean idEquals(ObjectId id) {
        return this.getId().equals(id);
    }

}
