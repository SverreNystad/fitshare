package com.pu.fitshare.server.services;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pu.fitshare.models.group.Group;
import com.pu.fitshare.models.group.GroupUserRelation;
import com.pu.fitshare.models.users.User;
import com.pu.fitshare.server.GroupRepository;
import com.pu.fitshare.server.GroupUserRelationRepository;

@Service
public class GroupService {
    
    @Autowired
	private GroupRepository groupRepository;
    @Autowired
	private GroupUserRelationRepository groupUserRelationRepository;

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

    public List<GroupUserRelation> getGroupUserRelations() {
		return groupUserRelationRepository.findAll();
	}
    
    public Optional<Group> createGroup(final String name, final String description, final String type, final User user) {
		try {
			Group group = new Group(name,description,type,user);
			return Optional.of(groupRepository.insert(group));
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}

    public Optional<GroupUserRelation> createGroupUserRelation(final User user, final Group group) {
		try {
			GroupUserRelation groupUserRelation = new GroupUserRelation(user, group);
			return Optional.of(groupUserRelationRepository.insert(groupUserRelation));
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}

    public Optional<GroupUserRelation> createGroupUserRelation(final ObjectId userId, final ObjectId groupId) {
		try {
			GroupUserRelation groupUserRelation = new GroupUserRelation(userId, groupId);
			return Optional.of(groupUserRelationRepository.insert(groupUserRelation));
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}

	public Optional<Group> addMemberToGroup(final User user, final Group group) {
		try {
			group.addMemeber(user);
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
		return null;
	}
	
}
