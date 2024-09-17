**StudyCards Web App**

StudyCards is a web application with two modes: Study Mode and Play Mode.
it has mcq based questions

**Features**

**_1. Study Mode_**

Users can browse through flashcards containing questions and answers.
This mode is intended for learning and review.
You can freely navigate through the cards, viewing the questions and corresponding answers.

**_2. Play Mode_**

Play Mode is like a test mode where users' performance is evaluated.


**Key rules:**(in Play mode)

Once a user views the answer to a question, they cannot change their choice.

Navigation is restricted: users cannot return to previous questions.

Marks are calculated based on number of correct answers.


**Technology Stack**

Backend: Spring Boot

Frontend: Vite + React + TypeScript

Database: H2 in-memory database (for development)


Database Configuration:

By default, the backend uses an H2 in-memory database that runs with Spring Boot. A sample query is executed on startup via the data.sql file, which ensures that the database is populated with default data every time the backend is restarted.

If you want to connect to your own database, you can configure it in the application.properties and add dependency in pom.xml if your Data base system is other than postgres file located in the src/main/resources directory.


**H2 In-Memory Database (Default):**
The project uses an H2 database during development for simplicity.
The database schema and initial data are defined in the data.sql file.
The data.sql file is executed every time the backend is restarted, making it ideal for development and testing.
