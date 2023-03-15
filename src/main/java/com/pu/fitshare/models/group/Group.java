package com.pu.fitshare.models.group;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import com.pu.fitshare.models.training.TrainingGoal;
import com.pu.fitshare.models.training.TrainingType;
import com.pu.fitshare.models.users.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "groups")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Group {
    
    @Id
    @JsonSerialize(using= ToStringSerializer.class)
    private ObjectId id;
    private String name;
    private TrainingGoal goal;
    private String description;
    private TrainingType type;
    private List<User> members;

    public Group(final String name, final String description, final String type, final User defaultmember) {
      this.name = name;
      this.description = description;
      this.goal = new TrainingGoal();
      this.type = TrainingType.valueOf(type);
      this.members.add(defaultmember);
	  }
    
    public Group(final String name, final TrainingGoal goal) {
      this.name = name;
      this.description = "What seems impossible today will one day be your warmup";
      this.goal = goal;
	  }

    public Group(final String nameString) {
      this.name = nameString;
      this.description = "What seems impossible today will one day be your warmup";
      this.goal = new TrainingGoal();
	  }

    public void addMemeber(User user){
      members.add(user);
    }

}