# ADR
The ADR (Architectural Decision Record) describes important design reasoning with the alternatives to this choise and why we chose to do as we did.
The use of design patterns, dependencies, Non-functional requirements (security, high availability, and fault tolerance).


## Why have several service classes? e.i UserService, TrainigService, GroupService.

This is to be in line with the Single responsibility principle, now the services only have one reason to change and that is business logic changes.