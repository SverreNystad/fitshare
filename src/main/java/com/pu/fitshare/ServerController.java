package com.pu.fitshare;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ServerController.API_TEST_SERVICE_PATH)
public class ServerController {
    public static final String API_TEST_SERVICE_PATH = "api/v1/test";

    @Autowired
    private ServerService serverService;

    /**
     * The {@code Serverservice} that provide the {@code ServerController} with
     * logic for getting, updating, deleting and adding Users to data base.
     * 
     * @return Serverservice
     */
    public ServerService getServerService() {
        return serverService;
    }

    @GetMapping(path = "/")
    public String getHelloString() {
        return getServerService().getHelloWorld();
    }
}
