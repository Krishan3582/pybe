# Project Context — LoopMaster

## Relationship to PyBe

LoopMaster is a project contribution in the PyBe repository. It extends Python-learning content with an interactive, loop-focused learning application. Rather than presenting only textual definitions, it combines structured lessons, guided examples, coding practice, visual iteration feedback, and practical case studies.

## Background

Loops are a foundational programming concept. Beginners often learn the syntax of `for` and `while` before they can confidently explain how iteration works, how a loop changes state, or why a loop is more suitable than repeating the same statement many times.

A useful learning experience should therefore connect three things:

1. The problem that requires repetition.
2. The logic and control flow used to repeat a task.
3. The Python syntax that implements the solution.

## Problem Statement

A lesson that only defines a loop may leave learners unsure about when to use a `for` loop or a `while` loop, how nested loops execute, what `range()` generates, and how control-flow statements such as `break` and `continue` affect execution.

Learners also need a safe, immediate way to experiment with code and observe its output.

## Project Objective

The objective of LoopMaster is to provide a beginner-friendly, interactive environment in which learners can:

- Study Python loop concepts in a structured order.
- Read examples and compare code with expected output.
- Practise problems at different difficulty levels.
- Execute Python code in the browser.
- Observe loop output step by step.
- Reorder code statements to understand program structure.
- Apply loop concepts to familiar real-world situations.
- Review their available learning-completion information.

## Target Learners

The primary audience is beginner-level Python learners, especially students studying introductory programming and control-flow concepts.

## Learning Approach

The project follows a progression from explanation to application:

**Understand** → **Observe** → **Practise** → **Experiment** → **Apply**

- Understand a concept through lesson text.
- Observe a short code example and its output.
- Practise with a challenge and hint.
- Experiment in the Python sandbox or loop simulator.
- Apply the concept in a case study.

## Scope

The current scope focuses on Python loops and related iteration concepts: `for`, `while`, `range()`, nested loops, loop control, lists, strings, and common infinite-loop mistakes.

The project includes a frontend, a small lesson/challenge API, and a relational data model backed by SQLite. The inspected implementation does not yet include a complete authentication system or persistent progress-management API.

## Success Criteria

The learning experience should allow a learner to navigate lessons, retrieve challenge content, execute Python in the browser after the runtime loads, use the guided wizard, step through simulator output, arrange code lines, and read all eight case studies.

## Assumptions and Constraints

- Node.js and npm are available for local development.
- The browser can access the Pyodide CDN when the sandbox is initialized.
- The API is available at the configured local address during development.
- Lesson and challenge content is supplied by the database seed scripts.
- Current progress behavior is prototype-level and should not be treated as cross-device or account-based persistence.
