

## How to start the server
Use the comand promt and change directly into fitshare-api folder.

To start the server write the code: `gradlew bootRun`

The server can now take http requests.

## How to generate reports
When using the running the unit tests the gradle test task will make the Jacoco test report for test coverage, and checkstyle for formating checking
To only run the tests write the code: `gradlew test`.