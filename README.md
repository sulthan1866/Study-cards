# StudyCards Web App

StudyCards is a web application designed to help users learn and test their knowledge through flashcards. It features two modes: Study Mode and Play Mode, with multiple-choice questions (MCQ) for interactive learning.

## Features

### 1. Study Mode
- Browse through flashcards containing questions and answers
- Intended for learning and review
- Free navigation through cards, viewing questions and corresponding answers

### 2. Play Mode
- Test mode where users' performance is evaluated
- Options for each question are shuffled every time the question is viewed

#### Key Rules (in Play Mode):
- Once a user views the answer to a question, they cannot change their choice
- Navigation is restricted: users cannot return to previous questions
- Marks are calculated based on the number of correct answers

## Technology Stack

- Backend: Spring Boot
- Frontend: Vite + React + TypeScript
- Database: H2 in-memory database (for development)

### Database Configuration

By default, the backend runs with an H2 in-memory database, which is ideal for development. The `data.sql` file, located in the `src/main/resources` directory, executes a sample query at startup, ensuring that the database is pre-populated every time the backend restarts.

If you'd like to connect the app to your own database (for example, PostgreSQL or any other database), you can modify the `application.properties` file and update the dependencies in `pom.xml` (PostgreSQL is already included).

### H2 In-Memory Database (Default)

- The project uses an H2 database during development for simplicity
- The database schema and initial data are defined in the `data.sql` file
- The `data.sql` file is executed every time the backend is restarted, making it ideal for development and testing

### Adding Your Own Questions

Users can add their own questions to the database via a web path. The path is:
```
main_link/30roundsencodedpassword
```
For example, in localhost:5127, it would be: `localhost:5127/30roundsencodedpassword`.

If using the H2 in-memory database, no further configuration is needed to add new questions. However, if you're using another database, like PostgreSQL, you'll need to configure the auto-increment functionality for the id column.

#### PostgreSQL Auto-Increment Setup Example

```sql
-- Step 1: Create a sequence
CREATE SEQUENCE cards_id_seq;

-- Step 2: Set the default value of the 'id' column to use the sequence
ALTER TABLE cards 
ALTER COLUMN id SET DEFAULT nextval('cards_id_seq'); 

-- Step 3: Synchronize the sequence with the existing data
SELECT setval('cards_id_seq', (SELECT COALESCE(MAX(id), 1) FROM cards)); 
```

## Option Shuffling

To enhance the learning experience and prevent memorization based on option order, the application now shuffles the options every time a question is viewed. This applies to both Study Mode and Play Mode, ensuring that users focus on the content of the options rather than their positions.
