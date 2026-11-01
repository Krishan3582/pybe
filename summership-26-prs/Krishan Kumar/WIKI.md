# LoopMaster Wiki

## 1. Project Overview

LoopMaster is an interactive learning application designed to teach Python loops through a combination of explanation, examples, execution, guided practice, and real-world scenarios. The main learning objective is to help beginners understand not only loop syntax but also how loop execution progresses and how loops solve repetitive problems.

The current project is a React frontend backed by an Express API and a SQLite database managed with Prisma.

## 2. Main Application Areas

### Dashboard

The dashboard is the entry point. It introduces the learning experience and shows summary cards for the number of lessons, coding challenges, and completed lessons, along with a learning-streak display.

### Learn Python

The learning area presents the ordered lessons and lets a learner open a lesson. Lesson content includes an explanation, a code example, expected output, and a practice task. The application also includes an interactive wizard and a loop simulator to help learners follow the lesson.

### Challenges

The challenge area presents coding problems. Challenge records include a title, description, difficulty, topic, starter code, expected output, hint, and solution. A learner can work in the Python sandbox, receive output feedback, and use the code builder to arrange code lines.

### Case Studies

The case-study section contains eight practical loop scenarios:

1. **Student Attendance Register** — iterate through student names and display attendance.
2. **Student Marks Report** — process marks stored in a list.
3. **ATM PIN Verification** — use a bounded while loop and break when the correct PIN is entered.
4. **Even Number Generator** — use the start, stop, and step arguments of `range()`.
5. **Class Timetable Generator** — use nested loops for classes and periods.
6. **Find a Student in a Register** — use break to stop searching once the target is found.
7. **Analyse Student Names** — use nested iteration to count characters in each name.
8. **Safe Billing Counter** — update a while-loop counter so that the condition eventually becomes false.

Each case study is presented with a situation, requirements, implementation steps, Python code, sample output, and an explanation.

### Progress

The progress section summarizes completion information available to the frontend. In the current implementation, completed challenge IDs are stored in local storage. Lesson completion is tracked in the active React application state. The database includes progress-related models, but persistent progress APIs are not currently implemented in the inspected routes.

## 3. Core Learning Components

### PythonSandbox

File: `client/src/components/PythonSandbox.jsx`

This component provides a text editor for Python source code, a Run button, a Reset button, and an output area. On mount, it loads Pyodide from the CDN and stores the initialized runtime in a React ref. When the learner runs code, the component captures standard output and standard error and displays the result. The optional `onRun` callback passes the captured output to the parent.

### LoopSimulator

File: `client/src/components/LoopSimulator.jsx`

The simulator visualizes a loop using supplied code and output. It splits output into lines and reveals one line per iteration. The learner can move to the next iteration, run all iterations, and reset the simulation.

This is an output-step visualizer: it reveals pre-supplied output lines rather than interpreting arbitrary Python source code itself.

### LearningWizard

File: `client/src/components/LearningWizard.jsx`

The wizard guides the learner through a sequence of steps. Lesson mode covers the lesson introduction, concept explanation, example, output, and practice prompt. Challenge mode covers understanding the challenge, planning an approach, viewing a hint, revealing the solution, and checking expected output.

### CodeBuilder

File: `client/src/components/CodeBuilder.jsx`

The code builder splits a challenge solution into lines, shuffles them, and lets the learner reorder the lines through drag-and-drop. The Check Code action compares the arranged line identifiers against the original order. Reset shuffles the lines again.

### Main Application

File: `client/src/App.jsx`

The main component manages the active navigation tab, fetched lessons and challenges, selected lesson/challenge/case study, completion state, and challenge feedback. It defines the eight lesson examples and eight case-study records and renders the related learning components.

## 4. Backend Architecture

The Express application is initialized in `server/src/index.js`. It enables CORS and JSON request parsing, exposes a root health/welcome route, and mounts the lesson and challenge routers.

### API Routes

| Route | Behavior |
|---|---|
| `GET /api/lessons` | Reads lessons from Prisma and orders them by the `order` field |
| `GET /api/challenges` | Reads challenge records from Prisma |

Both route handlers return JSON. On a database or server-side error they respond with HTTP 500 and an error message.

### Database and Prisma Models

File: `server/prisma/schema.prisma`

The SQLite schema defines:

- **User:** a basic user record with related progress and quiz results.
- **Lesson:** lesson title, description, topic, display order, and creation date.
- **Challenge:** challenge instructions, difficulty, topic, starter code, expected output, hint, and solution.
- **UserProgress:** lesson completion and score fields associated with a user.
- **QuizResult:** a user's topic score and total marks.

The presence of a model in the schema does not mean the corresponding feature is already wired to an API or UI.

## 5. Seed Data

### Lessons

Run `npm run seed` in the server directory. The lesson seed script clears the existing lesson records and inserts eight lessons in their intended display order:

1. Introduction to Loops
2. Python For Loop
3. Python While Loop
4. Understanding range()
5. Nested Loops
6. Break and Continue
7. Loops with Lists and Strings
8. Infinite Loops and Common Errors

**Caution:** the seed script calls `lesson.deleteMany()` before inserting records. It replaces existing lesson rows in the configured database.

### Challenges

Run `npm run seed-challenges` in the server directory. The challenge seed file contains three difficulty groupings (Beginner, Intermediate, Advanced) with practice problems and solution metadata.

**Caution:** inspect the challenge seed script before rerunning it on a database containing challenge data, because seed scripts can replace or duplicate records depending on their implementation.

## 6. Frontend and Backend Data Flow

1. The React application starts and requests `/api/lessons` and `/api/challenges`.
2. Express receives the GET requests and forwards them to the corresponding routers.
3. The route handlers query SQLite through the Prisma client.
4. The server returns lesson and challenge records as JSON.
5. The frontend stores the responses in React state and renders the learning content.
6. For Python execution, the browser loads Pyodide separately and executes the learner's code locally in the browser runtime.
7. Challenge completion IDs are written to browser local storage.

## 7. Running Locally

Follow the setup instructions in the root `README.md`. Start the Express API on port 5000 and the Vite development server in separate terminals. Ensure the SQLite connection string is configured and that Prisma migrations and seed scripts have been run.

## 8. Current Scope and Limitations

- No authentication flow was found in the inspected application.
- The API currently provides GET routes for lesson and challenge data.
- The frontend API URL is hard-coded to `http://localhost:5000`.
- Challenge completion is stored in the browser's local storage and is specific to that browser.
- Lesson completion is held in React state and can reset on a full page reload.
- Prisma contains user, progress, and quiz-result models, but the inspected routes do not yet provide complete account, progress-write, or quiz-result workflows.
- Pyodide needs a successful CDN load before Python code can run.
- The loop simulator visualizes supplied output lines; it does not trace arbitrary code execution.

## 9. Suggested Development Roadmap

- Add a frontend environment variable for the API base URL.
- Add loading and API-error states that guide the learner when the backend is unavailable.
- Add API endpoints for recording and retrieving lesson progress.
- Connect progress records to authenticated user identities if multi-user accounts are introduced.
- Add tests for API routes, challenge checking, and core UI interactions.
- Add deployment instructions and production environment configuration.
- Consider execution limits and isolation appropriate for running learner-submitted code.
