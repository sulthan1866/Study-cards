# StudyCards Web App

StudyCards is a web application designed to help users learn and test their knowledge through flashcards. It features two modes: Study Mode and Play Mode, with multiple-choice questions (MCQ) for interactive learning.

## Features

### 1. Study Mode
- Browse through flashcards containing questions and answers
- Intended for learning and review
- Free navigation through cards, viewing questions and corresponding answers

### 2. Play Mode
- Test mode where users' performance is evaluated

### 3. Picker Mode
- View all cards at once.
- Users can pick any card at random, offering greater flexibility in how they study and focus on specific topics.

### 4. Genres
- "DSA" ➔ "Data Structures & Algorithms"
- "AI" ➔ "Artificial Intelligence & Machine Learning"
- "FUN" ➔ "Trivia & Fun Facts"

#### Key Rules (in Play Mode):
- Once a user views the answer to a question, they cannot change their choice
- Navigation is restricted: users cannot return to previous questions
- Marks are calculated based on the number of correct answers

## Technology Stack

- Backend: Spring Boot
- Frontend: Vite + React + TypeScript
- Database: H2 in-memory database (for development)

## Option Shuffling

To enhance the learning experience and prevent memorization based on option order, the application now shuffles the options every time a question is viewed. This applies to both Study Mode and Play Mode, ensuring that users focus on the content of the options rather than their positions.

## Demo videos

#### Check these Linked in posts for demo videos

1)[Study and Play mode](https://www.linkedin.com/posts/sulthan1866_studycards-webapp-flashcards-activity-7245440226494480384-tEor?utm_source=share&utm_medium=member_desktop)

2)[Picker mode](https://www.linkedin.com/posts/sulthan1866_studycards-webapp-flashcards-activity-7252755611296124928-9z60?utm_source=share&utm_medium=member_desktop)

### Check out the web app [Here](https://study-card.netlify.app)
