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
	@Autowired
	private UserService userService;

	public List<Group> getGroups() {
		return groupRepository.findAll();
	}
    
    public Optional<Group> createGroup(final String name, final String description, final String type) {
		try {
			Group group = new Group(name,description,type);
			return Optional.of(groupRepository.insert(group));
		} catch (IllegalArgumentException e) {
			return Optional.empty();
		}
	}

	public Group getGroup(final String groupId) throws Exception{
		for (Group group:getGroups()){
			if (group.getId().toString()==groupId){
				return group;
			}
		}
		throw new Exception("Group not found");
	}

    public List<User> getUsers(final String groupId) throws Exception {
		List<User> users=new ArrayList<User>();
		for (ObjectId userId:getGroup(groupId).getUsers()){
			users.add(userService.getUser(userId).get());
		}
		return users;
	}
}
