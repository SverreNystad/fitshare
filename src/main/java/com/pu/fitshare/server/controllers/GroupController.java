package com.pu.fitshare.server.controllers;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pu.fitshare.models.group.Group;
import com.pu.fitshare.models.training.TrainingType;
import com.pu.fitshare.models.users.User;
import com.pu.fitshare.server.services.GroupService;
import com.pu.fitshare.server.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class GroupController {

    @Autowired
    private GroupService groupService;
    @Autowired
    private UserService userService;

    /**
     * The {@code GroupService} that provide the {@code ServerController} with
     * logic for getting, updating, deleting and adding {@link Group}s to database.
     * 
     * @return GroupService
     */
    public GroupService getGroupService() {
        return groupService;
    }

    public UserService getUserService() {
        return userService;
    }

    private ResponseEntity<Group> presentCheck(Optional<Group> group) {
        if (group.isPresent()) {
            return new ResponseEntity(group, HttpStatus.OK);
        } else {
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/groups")
    public ResponseEntity<List<Group>> getAllGroups() {
        ResponseEntity<List<Group>> response = new ResponseEntity(getGroupService().getGroups(), HttpStatus.OK);
        return response;
    }

    @GetMapping(path = "/groups/{ID}")
    public ResponseEntity<Group> getGroupById(@PathVariable("ID") String ID) {
        return presentCheck(getGroupService().getGroup(ID));
    }

    @PostMapping(path = "/groups/{groupID}/session/{sessionID}")
    public ResponseEntity<Group> addSessionToGroup(@PathVariable("groupID") String groupID,
            @PathVariable("sessionID") String sessionID) {
        try {
            
            Optional<Group> group = groupService.getGroup(groupID);
            if (!group.get().isSession(sessionID))
                group.get().addSession(sessionID);
            group = groupService.updateGroup(group.get());

            return presentCheck(group);
        } catch (Exception e) {
            System.out.println("The input was bad: " + e.getLocalizedMessage());
            return new ResponseEntity(e.getMessage(), HttpStatus.I_AM_A_TEAPOT);
        }

    }

    @RequestMapping(path = "/groups/{name}/{goal}/{type}")
    public ResponseEntity<Group> createGroup(@PathVariable("name") String name, @PathVariable("goal") String goal,
            @PathVariable("type") String type) {
        try {

            Optional<Group> createdGroup = getGroupService().createGroup(name, goal, type);

            return presentCheck(createdGroup);

        } catch (IllegalArgumentException e) {
            System.out.println("The input was bad: " + e.getLocalizedMessage());
            return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(path = "/group/users/{groupId}")
    public ResponseEntity<List<User>> getUsers(@PathVariable("groupId") String groupId){
        try {
            ResponseEntity<List<User>> response = new ResponseEntity(getGroupService().getUsers(groupId), HttpStatus.OK);
            return response;
        } catch (Exception e) {
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        
    }

    @RequestMapping(path = "/group/addUser/{groupId}/{userId}")
    public ResponseEntity<Group> addUser(@PathVariable("groupId") String groupId, @PathVariable("userId") String userId){
        try {
            ObjectId userObjectId = new ObjectId(userId);
            Optional<User> user = getUserService().getUser(userObjectId);
            if(user.get()==null){
                return new ResponseEntity(null, HttpStatus.NOT_FOUND);
            }
            Group group = getGroupService().getGroup(groupId);
            group.addUser(userObjectId);
            ResponseEntity<Group> response = new ResponseEntity(group, HttpStatus.OK);
            return response;
        } catch (Exception e) {
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        
    }
    
}
