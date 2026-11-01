# Changes — LoopMaster

## Added

### Python Loop Learning Application

Added a dedicated application named **LoopMaster** under `LoopMaster/` with a React/Vite client and an Express/Prisma server.

### Learning Dashboard

- Added a dashboard welcome area and navigation.
- Added summary cards for lesson count, challenge count, and completed lessons.
- Added navigation for Dashboard, Learn Python, Challenges, Case Studies, and Progress.

### Structured Python Lessons

Added eight lesson topics:

- Introduction to Loops
- Python For Loop
- Python While Loop
- Understanding range()
- Nested Loops
- Break and Continue
- Loops with Lists and Strings
- Infinite Loops and Common Errors

Lesson records are supplied through the Prisma lesson seed script.

### Interactive Learning Wizard

Added a guided wizard for lesson and challenge modes. Lesson mode covers concept explanation, example code, output, and practice. Challenge mode covers problem understanding, approach, hint, solution reveal, and expected output.

### Visual Loop Simulator

Added a step-based simulator with Next Iteration, Run All, and Reset controls. It displays the supplied output progressively so learners can see the sequence of loop results.

### Browser-Based Python Sandbox

Added a code editor that loads Pyodide from a CDN, executes Python code in the browser, captures standard output and standard error, and displays results or runtime errors.

### Coding Challenges

Added challenge data with difficulty, topic, starter code, expected output, hints, and solutions. The challenge seed file is organized into Beginner, Intermediate, and Advanced groups.

### Drag-and-Drop Code Builder

Added a code-ordering activity that shuffles solution lines and lets learners reorder them. The check action verifies whether the lines have been restored to the reference order.

### Practical Case Studies

Added eight case studies:

- Student Attendance Register
- Student Marks Report
- ATM PIN Verification
- Even Number Generator
- Class Timetable Generator
- Find a Student in a Register
- Analyse Student Names
- Safe Billing Counter

Each case study contains a situation, requirements, steps, Python code, sample output, and explanation.

### Backend API

Added an Express server with:

- Root API status route at `/`
- `GET /api/lessons` for ordered lesson data
- `GET /api/challenges` for challenge data
- CORS and JSON request middleware

### Database Schema

Added Prisma models for User, Lesson, Challenge, UserProgress, and QuizResult, using SQLite as the database provider.

## Learning Flow Changes

The application organizes the learning experience into a progression:

**Dashboard** → **Learn Python** → **Guided Explanation** → **Code Practice** → **Case Studies** → **Progress Review**

## Current Implementation Notes

- Challenge completion IDs are stored in local storage.
- Lesson completion is held in frontend React state.
- The current API routes retrieve lessons and challenges; progress-write endpoints and authentication were not found in the inspected implementation.
- The frontend currently calls the API using a localhost URL.
- The Pyodide runtime is loaded dynamically from a CDN.

## Documentation

Added project documentation describing the background, product scope, application architecture, key components, setup steps, API endpoints, seed data, and current implementation boundaries.
