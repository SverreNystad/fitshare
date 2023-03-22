package com.pu.fitshare.server.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pu.fitshare.models.group.Group;
import com.pu.fitshare.models.users.User;
import com.pu.fitshare.server.GroupRepository;

@Service
public class GroupService {
    
    @Autowired
	private GroupRepository groupRepository;

	public List<Group> getGroups() {
		return groupRepository.findAll();
	}

    public Optional<Group> getGroup(final String id) {
        ObjectId groupId = new ObjectId(id);
        return groupRepository.findById(groupId);
    }

    public Optional<Group> updateGroup(final Group group) {
        ObjectId groupId = group.getId();
        groupRepository.deleteById(groupId);
        groupRepository.insert(group);
        return groupRepository.findById(groupId);
    }

    
    public Optional<Group> createGroup(final String name, final String description, final String type) {
		try {
			Group group = new Group(name,description,type);
			return Optional.of(groupRepository.insert(group));
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}



	public Optional<Group> addUserToGroup(final ObjectId userId, final Group group) {
		try {
			group.addUser(userId);
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
		return null;
	}
	
}
