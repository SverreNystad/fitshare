package com.pu.fitshare.models.users;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.pu.fitshare.models.training.TrainingGoal;
import com.pu.fitshare.models.training.TrainingPlan;
import com.pu.fitshare.models.training.TrainingSession;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * The {@code User} class represnts the Users of FitShare. It contains all the
 * data about a user that will be sent over to the UI.
 */
@Document(collection = "user")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @JsonSerialize(using= ToStringSerializer.class)
    private ObjectId id;
    private String username;
    private String password;
    private Date birthday;
    private String description;

    private int streak;
    private Date lastLogin;

    private List<TrainingPlan> plans;
    private List<TrainingSession> sessions;
    private List<TrainingGoal> goals;

    public User(final String username, final String password) {
        this.username = username;
        this.password = password;
        this.plans = new ArrayList<TrainingPlan>();
        this.goals = new ArrayList<TrainingGoal>();
    }

    public boolean equals(final String username, final String password) {
        return this.getUsername().equals(username) && this.getPassword().equals(password);
    }

    public void addPlan(TrainingPlan plan) {
        this.plans.add(plan);
    }

    public void addGoal(TrainingGoal goal) {
        this.goals.add(goal);
    }

}
