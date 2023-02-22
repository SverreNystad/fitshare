# FitShare API

## Description
Fitshare api is the an REST api for the application Fitshare. The API will provide the UI userinfo, training regiments, and data.
To find more info about the FitShare application go to [Official FitShare documentation](https://gitlab.stud.idi.ntnu.no/tdt4140-2023/landsby-1/gruppe-14/fitshare-ui/-/blob/main/README.md). 
The FitShare API uses the spring framework together with MongoDB to provide its service.



# How to use the FitShare API

## How to start the server
Use the comand promt and change directly into fitshare-api folder.

To start the server write the code: 
```cmd
gradlew bootRun
```

The server can now take http requests.

## How to compile
To compile the project 
```cmd
gradlew build
```

## How to generate reports
When using the running the unit tests the gradle test task will make the Jacoco test report for test coverage, and checkstyle for formating checking
To only run the tests write the code:
```cmd
gradlew test
```

## To see all possible tasks one can run
This will give all the taskes and corresponding discriptions.
```cmd
gradlew tasks
```


## How to add new dependency
If you need to add a new dependecy to the project go to the 'dependencies.gradle' and add a new row with format 'nickname' : 'url'. The nickname is how one will access it in the rest of the project. Then add it to the dependencies in 'build.gradle'.

## All Endpoints

### Users

#### Get all users (test)

[api/v1/users](http://localhost:8080/api/v1/users)

#### Login

[api/v1/users/login/{username}/{password}](http://localhost:8080/api/v1/users/login/)

#### Signup

[api/v1/users/signup/{username}/{password}](http://localhost:8080/api/v1/users/signup/)
  
#### Edit user (Not implemented)

[api/v1/users/edit/{userId}](http://localhost:8080/api/v1/users/edit/)

#### Delete user (Not implemented)

[api/v1/users/delete/{userId}](http://localhost:8080/api/v1/users/delete/)
  
### Training

#### Get all goals

[api/v1/goals](http://localhost:8080/api/v1/goals)

#### Get all plans

[api/v1/plans](http://localhost:8080/api/v1/plans)

#### Get all sessions

[api/v1/sessions](http://localhost:8080/api/v1/sessions)

#### Get all exercises

[api/v1/exercises](http://localhost:8080/api/v1/exercises)

#### Add sessions

[api/v1/sessions/{sessionsName}](http://localhost:8080/api/v1/sessions/)

## Reference Documentation

For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.0.2/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.0.2/gradle-plugin/reference/html/#build-image)
* [Spring Data MongoDB](https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#data.nosql.mongodb)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#web)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/3.0.2/reference/htmlsingle/#using.devtools)

### Guides
The following guides illustrate how to use some features concretely:

* [Accessing Data with MongoDB](https://spring.io/guides/gs/accessing-data-mongodb/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)

### Additional Links
These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)



## Authors and acknowledgment
The team whom created this api consists of:

* Eirin Helseth
* Håvard Solberg Nybøe
* Martine Nilsen
* Skage Klingstedt Reistad
* Sverre Nystad
* Vidar Selnes Lund

## License
Undecided