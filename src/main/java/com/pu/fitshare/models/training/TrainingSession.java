package com.pu.fitshare.models.training;

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

    public boolean idEquals(ObjectId id) {
        return this.getId().equals(id);
    }

}
