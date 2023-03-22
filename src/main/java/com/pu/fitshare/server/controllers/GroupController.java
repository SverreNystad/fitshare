package com.pu.fitshare.server.controllers;

import java.util.List;
import java.util.Optional;

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

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class GroupController {

    @Autowired
    private GroupService groupService;

    /**
     * The {@code GroupService} that provide the {@code ServerController} with
     * logic for getting, updating, deleting and adding {@link Group}s to database.
     * 
     * @return GroupService
     */
    public GroupService getGroupService() {
        return groupService;
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

}
