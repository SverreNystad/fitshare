package com.pu.fitshare.server.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pu.fitshare.models.group.Group;
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
}
