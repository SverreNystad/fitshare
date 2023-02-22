package com.pu.fitshare.models.group;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.pu.fitshare.models.goal.Goal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "groups")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Group {
    
    @Id
    private ObjectId id;
    private String name;
    private Goal goal;
    private String description;

    public Group(final String name, final String description) {
      this.name = name;
      this.description = description;
      this.goal = new Goal();
	  }
    
    public Group(final String name, final Goal goal) {
      this.name = name;
      this.description = "What seems impossible today will one day be your warmup";
      this.goal = goal;
	  }

    public Group(final String nameString) {
      this.name = nameString;
      this.description = "What seems impossible today will one day be your warmup";
      this.goal = new Goal();
	  }

}