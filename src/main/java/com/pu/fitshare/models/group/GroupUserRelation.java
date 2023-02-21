package com.pu.fitshare.models.group;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import com.pu.fitshare.models.users.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


/**
* Represents the relationship between {@link User}s and {@link Group}s.
* This is the MongoDB equivalent of a many-to-many table.
* Queries involving this relationship must implement own and sometimes tailored functions for searching ids.
*/

@Document(collection = "groupsUserRelation")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GroupUserRelation {
    private ObjectId userId;
    private ObjectId groupId;

    public GroupUserRelation(final User user, final Group group){
        this.userId = user.getId();
        this.groupId = group.getId();
    }
}
