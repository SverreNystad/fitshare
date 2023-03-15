package com.pu.fitshare.models.training;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "trainingSession")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrainingSession {

    @Id
    @JsonSerialize(using= ToStringSerializer.class)
    private ObjectId id;
    private String name;
    private int duration;
    private TrainingIntensity intensity;
    private String type;
    // private List<TrainingExercise> exercises;
    private String description;
    private String userName;

    public TrainingSession(final String name, final int duration, final String intensity) {
        this.name = name;
        this.duration = duration;
        this.intensity = TrainingIntensity.valueOf(intensity);
    }

    public TrainingSession(final String name, final int duration, final String intensity, final String type, final String description, final String userName) {
        this.name = name;
        this.duration = duration;
        this.intensity = TrainingIntensity.valueOf(intensity);
        this.type = type;
        this.description = description;
        this.userName = userName;
    }

    public boolean idEquals(ObjectId id) {
        return this.getId().equals(id);
    }

}
