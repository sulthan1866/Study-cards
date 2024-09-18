<h1>StudyCards Web App</h1>

StudyCards is a web application with two modes: Study Mode and Play Mode.
it has mcq based questions

<h1>Features</h1>

<h3>1. Study Mode</h3>

Users can browse through flashcards containing questions and answers.
This mode is intended for learning and review.
You can freely navigate through the cards, viewing the questions and corresponding answers.

<h3>2. Play Mode</h3>

Play Mode is like a test mode where users' performance is evaluated.


<h2>Key rules:(in Play mode)</h2>

Once a user views the answer to a question, they cannot change their choice.

Navigation is restricted: users cannot return to previous questions.

Marks are calculated based on number of correct answers.


<h2>Technology Stack</h2>

Backend: Spring Boot

Frontend: Vite + React + TypeScript

Database: H2 in-memory database (for development)


**Database Configuration:**

By default, the backend runs with an H2 in-memory database, which is ideal for development. The ```data.sql``` file, located in the ```src/main/resources``` directory, executes a sample query at startup, ensuring that the database is pre-populated every time the backend restarts.

If you'd like to connect the app to your own database (for example, PostgreSQL or any other database), you can modify the ```application.properties``` file and update the dependencies in ```pom.xml``` (PostgreSQL is already included).


<h2>H2 In-Memory Database (Default):</h2>
The project uses an H2 database during development for simplicity.
The database schema and initial data are defined in the data.sql file.
The ```data.sql``` file is executed every time the backend is restarted, making it ideal for development and testing.

<h4>Adding Your Own Questions</h4>

sers can add their own questions to the database via a web path. The path is:
main_link/30roundsencodedpassword
For example in localhost:5127, ```localhost:5127/30roundsencodedpassword```.

If using the H2 in-memory database, no further configuration is needed to add new questions. However, if you're using another database, like PostgreSQL, you’ll need to configure the auto-increment functionality for the id column.

<h2>PostgreSQL Auto-Increment Setup Example</h2>

```sql
-- Step 1: Create a sequence
CREATE SEQUENCE cards_id_seq;

-- Step 2: Set the default value of the 'id' column to use the sequence
ALTER TABLE cards 
ALTER COLUMN id SET DEFAULT nextval('cards_id_seq'); 

-- Step 3: Synchronize the sequence with the existing data
SELECT setval('cards_id_seq', (SELECT COALESCE(MAX(id), 1) FROM cards)); 
```
