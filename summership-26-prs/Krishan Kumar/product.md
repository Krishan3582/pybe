# LoopMaster — Product Description

## Overview

LoopMaster is an interactive Python learning product focused on loops. It helps learners move from basic understanding to practical implementation through lessons, guided examples, code execution, visual feedback, and real-world case studies.

## Product Goals

- Make Python loop concepts easier to understand.
- Help learners distinguish between different loop types and control statements.
- Provide immediate feedback while practising Python.
- Connect abstract programming ideas to realistic tasks.
- Encourage experimentation instead of passive reading.

## Main User Journey

### 1. Open the Dashboard

The learner enters the application and sees an overview of the learning experience and summary information. The dashboard provides a starting point for lessons.

### 2. Study a Lesson

The learner selects one of the eight lessons. Each lesson focuses on a specific loop concept and includes explanatory material, a code sample, output, and a practice task.

### 3. Follow the Learning Wizard

The learner can move through guided steps. The wizard presents the concept, example, expected output, and practice task. In challenge mode it guides the learner through the problem, approach, hint, solution, and expected output.

### 4. Experiment with Loop Execution

The visual loop simulator reveals the expected output one line at a time. Learners can move iteration by iteration, run the complete sequence, or reset the display.

### 5. Solve Coding Challenges

The learner chooses a challenge and writes Python code in the sandbox. The sandbox initializes Pyodide in the browser, executes the code, and displays captured output or an error message. Where challenge checking is configured, the app compares normalized output with the expected output.

### 6. Arrange the Code

The drag-and-drop builder presents solution lines in a shuffled order. The learner rearranges the lines and checks whether they match the original solution order.

### 7. Apply Learning Through Case Studies

The case-study area contains eight applied scenarios that demonstrate how loops can solve practical problems. Each study includes the situation, requirements, steps, code, output, and explanation.

### 8. Review Progress

The progress area shows completion information maintained by the current frontend. Challenge completion IDs persist in browser local storage; lesson completion is currently held in React state.

## Learning Content

| Lesson | Core Concept |
|---|---|
| 1. Introduction to Loops | Why repetition is useful |
| 2. Python For Loop | Iterating through a sequence |
| 3. Python While Loop | Repeating while a condition is true |
| 4. Understanding range() | Start, stop, and step |
| 5. Nested Loops | A loop inside another loop |
| 6. Break and Continue | Stopping or skipping iterations |
| 7. Loops with Lists and Strings | Iterating over collections and characters |
| 8. Infinite Loops and Common Errors | Conditions, updates, and debugging |

## Challenge Design

Challenges are seeded at three difficulty levels:

- **Beginner:** fundamental iteration, counting, summing, lists, and strings.
- **Intermediate:** factorials, Fibonacci, prime checks, string reversal, nested patterns, and loop-control practice.
- **Advanced:** nested-loop patterns and number problems such as prime numbers, Armstrong numbers, palindromes, GCD, and other algorithmic exercises.

A challenge record contains its description, difficulty, topic, starter code, expected output, hint, and reference solution.

## Case Study Catalogue

1. Student Attendance Register
2. Student Marks Report
3. ATM PIN Verification
4. Even Number Generator
5. Class Timetable Generator
6. Find a Student in a Register
7. Analyse Student Names
8. Safe Billing Counter

## Product Architecture

- **Frontend:** React application served by Vite.
- **Backend:** Express API running on Node.js.
- **Persistence:** SQLite database accessed through Prisma.
- **Python runtime:** Pyodide loaded in the browser from a CDN.
- **Client-side state:** React state and browser local storage for challenge completion.

## Product Boundaries

The current implementation is a learning prototype. The backend exposes read-only lesson and challenge routes. Database models for users, progress, and quiz results exist, but the inspected API does not implement a complete user-authentication or progress-write workflow. The code sandbox runs Python in the browser and is separate from the Express API.
