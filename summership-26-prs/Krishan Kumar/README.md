# LoopMaster — Learn Python Loops Interactively

LoopMaster is an interactive Python-learning application focused on understanding and practising Python loops. It combines structured lessons, coding challenges, practical case studies, a visual loop simulator, a guided learning wizard, a drag-and-drop code builder, and an in-browser Python execution environment.

The project is located in `LoopMaster/` within this repository folder.

## Features

- **Learning dashboard:** Overview of lessons, challenges, and learning activity.
- **Eight structured lessons:** Introduction to loops, `for`, `while`, `range()`, nested loops, `break` and `continue`, loops with lists and strings, and infinite loops/common errors.
- **Interactive learning wizard:** Guided steps for understanding a lesson or challenge, exploring examples, hints, solutions, and expected output.
- **Coding challenges:** Practice tasks grouped into Beginner, Intermediate, and Advanced levels.
- **Python code editor:** Write and run Python code in the browser using Pyodide.
- **Visual loop simulator:** Step through output iterations, run all iterations, or reset the simulation.
- **Drag-and-drop code builder:** Arrange shuffled Python statements into the correct order.
- **Case studies:** Eight practical scenarios that connect loop concepts to everyday tasks, including attendance, marks, ATM PIN verification, timetables, and number generation.
- **Progress view:** Displays learning and challenge completion information. Challenge completion is saved in browser local storage.

## Technology Stack

| Area | Technology |
|---|---|
| Frontend | React 19, Vite |
| Navigation and UI state | React state; React Router and Zustand are installed dependencies |
| Data fetching | Fetch API; Axios and TanStack Query are installed dependencies |
| Python execution | Pyodide loaded in the browser |
| Backend | Node.js, Express 5 |
| Database | SQLite |
| ORM and schema | Prisma |
| Styling | CSS, Google Fonts (Inter) |
| Icons and charts | lucide-react and Recharts are installed dependencies |

## Repository Structure

```text
LoopMaster/
├── client/
│   ├── index.html
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       └── components/
│           ├── CodeBuilder.jsx
│           ├── LearningWizard.jsx
│           ├── LoopSimulator.jsx
│           └── PythonSandbox.jsx
└── server/
    ├── package.json
    ├── prisma.config.ts
    ├── prisma/
    │   ├── schema.prisma
    │   ├── seed.js
    │   ├── challengeSeed.js
    │   └── migrations/
    └── src/
        ├── index.js
        ├── routes/
        │   ├── lessonRoutes.js
        │   └── challengeRoutes.js
        └── utils/
            └── prisma.js
```

## Prerequisites

- Node.js and npm
- Internet access for installing npm packages and loading the Pyodide runtime from its CDN
- A modern browser that supports the application

## Setup and Run

Open two terminals.

### 1. Start the backend

```bash
cd LoopMaster/server
npm install
```

Create a `.env` file in `server/` and configure the SQLite connection:

```env
DATABASE_URL="file:./prisma/dev.db"
PORT=5000
```

Generate the Prisma client and apply the migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

Seed lessons and challenges:

```bash
npm run seed
npm run seed-challenges
```

Start the API:

```bash
npm run dev
```

The API runs at `http://localhost:5000`.

### 2. Start the frontend

In a second terminal:

```bash
cd LoopMaster/client
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | API welcome/status response |
| GET | `/api/lessons` | Returns lessons ordered by their lesson order |
| GET | `/api/challenges` | Returns the available coding challenges |

The frontend currently requests the API at `http://localhost:5000`. For deployment, configure this address through an environment-based API URL rather than hard-coding localhost.

## Learning Content

The lesson seed file creates eight core lessons. The challenge seed file provides practice material across three difficulty levels. The application also defines eight case studies in the frontend, each with a situation, requirements, solution steps, Python code, sample output, and explanation.

## Important Implementation Notes

- Python code is executed in the browser with Pyodide; the server is not a Python execution service.
- Pyodide is loaded from a CDN, so the first initialization requires network access.
- The backend uses SQLite through Prisma.
- The current API exposes read endpoints for lessons and challenges.
- Challenge completion is persisted in browser local storage. Lesson completion is maintained in React component state in the current implementation.
- A user-progress data model exists in Prisma, but the currently inspected API routes do not expose progress-write endpoints or authentication.
- The progress UI should therefore be understood as prototype-level client-side progress, not a multi-user account system.

## Development Commands

Frontend:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

Backend:

```bash
npm run dev
npm start
npm run seed
npm run seed-challenges
```

## Future Improvements

Potential next steps include a configurable API base URL, persistent per-user lesson progress, authentication if accounts are required, automated tests, deployment configuration, and safeguards for executing user-submitted code.

## Project Location

`summership-26-prs/Krishan Kumar/LoopMaster/` in the `Krishan3582/pybe` repository.
