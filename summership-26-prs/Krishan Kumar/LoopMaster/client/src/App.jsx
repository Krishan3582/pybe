import { useEffect, useState } from "react";
import "./index.css";
import PythonSandbox from "./components/PythonSandbox";
import LoopSimulator from "./components/LoopSimulator";
import LearningWizard from "./components/LearningWizard";
import CodeBuilder from "./components/CodeBuilder";

function App() {
  const [lessons, setLessons] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [loading, setLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState(
  JSON.parse(localStorage.getItem("completedChallenges") || "[]")
);

const [challengeFeedback, setChallengeFeedback] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [lessonResponse, challengeResponse] = await Promise.all([
          fetch("http://localhost:5000/api/lessons"),
          fetch("http://localhost:5000/api/challenges"),
        ]);

        if (!lessonResponse.ok || !challengeResponse.ok) {
          throw new Error("Unable to fetch data");
        }

        const lessonData = await lessonResponse.json();
        const challengeData = await challengeResponse.json();

        setLessons(lessonData);
        setChallenges(challengeData);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const lessonContent = {
    1: {
      explanation:
        "A loop executes the same block of code multiple times. It saves time and avoids writing repeated statements.",
      example: `print("Hello")
print("Hello")
print("Hello")`,
      output: `Hello
Hello
Hello`,
      practice: "Print your name 5 times using a loop.",
    },

    2: {
      explanation:
        "A for loop is used to iterate over a sequence. It executes the code once for each item.",
      example: `for i in range(1, 6):
    print(i)`,
      output: `1
2
3
4
5`,
      practice: "Print numbers from 1 to 10 using a for loop.",
    },

    3: {
      explanation:
        "A while loop repeatedly executes code as long as its condition is True. Remember to update the variable to avoid an infinite loop.",
      example: `count = 1

while count <= 5:
    print(count)
    count += 1`,
      output: `1
2
3
4
5`,
      practice: "Print numbers from 10 down to 1 using a while loop.",
    },

    4: {
      explanation:
        "The range() function generates a sequence of numbers. It supports start, stop and step values.",
      example: `for i in range(2, 11, 2):
    print(i)`,
      output: `2
4
6
8
10`,
      practice: "Use range() to print odd numbers from 1 to 15.",
    },

    5: {
      explanation:
        "A nested loop is a loop inside another loop. The inner loop completes all its iterations for each iteration of the outer loop.",
      example: `for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)`,
      output: `1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3`,
      practice: "Use nested loops to print a 3 by 3 star pattern.",
    },

    6: {
      explanation:
        "The break statement immediately stops a loop. The continue statement skips the current iteration and moves to the next one.",
      example: `for i in range(1, 6):
    if i == 3:
        continue
    print(i)`,
      output: `1
2
4
5`,
      practice:
        "Print numbers from 1 to 10, but stop the loop when the number reaches 7 using break.",
    },

    7: {
      explanation:
        "Loops can access each element of a list or each character of a string one by one.",
      example: `fruits = ["Apple", "Mango", "Banana"]

for fruit in fruits:
    print(fruit)`,
      output: `Apple
Mango
Banana`,
      practice: "Create a list of five fruits and print each fruit using a loop.",
    },

    8: {
      explanation:
        "An infinite loop continues forever because its condition never becomes False. Common mistakes include incorrect conditions and forgetting to update variables.",
      example: `count = 1

while count <= 5:
    print(count)
    count += 1`,
      output: `1
2
3
4
5`,
      practice:
        "Find and fix the error in a while loop that never updates its counter.",
    },
  };


  // Practical case studies covering all eight loop lessons.
  const caseStudies = [
    {
      id: 1, topic: "Introduction to Loops", title: "Student Attendance Register",
      situation: "A teacher needs to display the attendance status of 5 students without writing the same print statement five times.",
      requirements: ["Repeat the same task for every student.", "Display each student's attendance record."],
      steps: ["Create a list containing student names.", "Use a for loop to visit each name.", "Print the attendance status for the current student."],
      code: `students = ["Aman", "Riya", "Karan", "Neha", "Arjun"]\n\nfor student in students:\n    print(student, "- Present")`,
      output: `Aman - Present\nRiya - Present\nKaran - Present\nNeha - Present\nArjun - Present`,
      explanation: "The loop runs once for each name in the list. This avoids repeating the print statement manually."
    },
    {
      id: 2, topic: "For Loop", title: "Student Marks Report",
      situation: "A teacher wants to print marks for each subject from a student's marks list.",
      requirements: ["Store the marks in a list.", "Read each mark one by one.", "Display the mark with a report label."],
      steps: ["Create a list of marks.", "Run a for loop over the list.", "Print each mark."],
      code: `marks = [85, 90, 78, 92, 88]\n\nfor mark in marks:\n    print("Subject marks:", mark)`,
      output: `Subject marks: 85\nSubject marks: 90\nSubject marks: 78\nSubject marks: 92\nSubject marks: 88`,
      explanation: "A for loop is useful when the items to process are already available in a sequence, such as a list of marks."
    },
    {
      id: 3, topic: "While Loop", title: "ATM PIN Verification",
      situation: "An ATM should allow a customer up to 3 PIN attempts. The process should stop when the correct PIN is entered or attempts run out.",
      requirements: ["Start with zero attempts.", "Allow a maximum of 3 attempts.", "Stop early if the PIN is correct."],
      steps: ["Store the correct PIN.", "Use a while loop while attempts are below 3 and the PIN is incorrect.", "Increase the attempt counter after each try."],
      code: `correct_pin = "1234"\nattempts = 0\n\nwhile attempts < 3:\n    entered_pin = input("Enter PIN: ")\n    attempts += 1\n\n    if entered_pin == correct_pin:\n        print("Access granted")\n        break\n    else:\n        print("Incorrect PIN")\n\nif attempts == 3 and entered_pin != correct_pin:\n    print("Card blocked")`,
      output: `Example with three incorrect entries:\nEnter PIN: 1111\nIncorrect PIN\nEnter PIN: 2222\nIncorrect PIN\nEnter PIN: 3333\nIncorrect PIN\nCard blocked`,
      explanation: "The while loop repeats while attempts remain. The break statement ends the loop immediately when the correct PIN is entered."
    },
    {
      id: 4, topic: "range() Function", title: "Even Number Generator",
      situation: "A student needs to generate even numbers from 2 to 20 for a maths worksheet.",
      requirements: ["Start from 2.", "Stop at 20 inclusive.", "Increase by 2 each time."],
      steps: ["Use range() with start value 2.", "Set the stop value to 21 because range excludes its stop value.", "Use 2 as the step value."],
      code: `for number in range(2, 21, 2):\n    print(number)`,
      output: `2\n4\n6\n8\n10\n12\n14\n16\n18\n20`,
      explanation: "range(2, 21, 2) generates numbers beginning at 2 and adds 2 each time. The stop value 21 is not included."
    },
    {
      id: 5, topic: "Nested Loops", title: "Class Timetable Generator",
      situation: "A school wants to display periods for three classes. Each class has four periods.",
      requirements: ["Repeat for each class.", "For every class, display four periods."],
      steps: ["Use the outer loop for class numbers.", "Use the inner loop for period numbers.", "Print each class and its period."],
      code: `for class_number in range(1, 4):\n    print("Class", class_number)\n    for period in range(1, 5):\n        print("  Period", period)`,
      output: `Class 1\n  Period 1\n  Period 2\n  Period 3\n  Period 4\nClass 2\n  Period 1\n  Period 2\n  Period 3\n  Period 4\nClass 3\n  Period 1\n  Period 2\n  Period 3\n  Period 4`,
      explanation: "The outer loop selects a class. For each class, the inner loop completes all four periods before the outer loop moves to the next class."
    },
    {
      id: 6, topic: "break and continue", title: "Find a Student in a Register",
      situation: "A teacher searches a student register for the name 'Neha'. Once the name is found, there is no need to check further names.",
      requirements: ["Check names one by one.", "Print a message when the name is found.", "Stop searching after a match."],
      steps: ["Create a list of student names.", "Compare each name with the target name.", "Use break when a match is found."],
      code: `students = ["Aman", "Riya", "Neha", "Karan", "Arjun"]\ntarget = "Neha"\n\nfor student in students:\n    if student == target:\n        print("Student found:", student)\n        break`,
      output: `Student found: Neha`,
      explanation: "The break statement immediately stops the loop after Neha is found. The remaining names are not checked."
    },
    {
      id: 7, topic: "Loops with Lists and Strings", title: "Analyse Student Names",
      situation: "A school wants to display each student's name and count how many letters are in each name.",
      requirements: ["Store names in a list.", "Visit each name.", "Use a loop to count characters."],
      steps: ["Create a list of names.", "Use an outer loop to get each name.", "Use an inner loop to count its characters and print the result."],
      code: `students = ["Aman", "Riya", "Karan"]\n\nfor name in students:\n    letter_count = 0\n    for letter in name:\n        letter_count += 1\n    print(name, "has", letter_count, "letters")`,
      output: `Aman has 4 letters\nRiya has 4 letters\nKaran has 5 letters`,
      explanation: "The outer loop processes each name. The inner loop visits every character in that name and counts it."
    },
    {
      id: 8, topic: "Infinite Loops and Errors", title: "Safe Billing Counter",
      situation: "A shop billing program must count items from 1 to 5 and then stop. Forgetting to update the counter could create an infinite loop.",
      requirements: ["Start the counter at 1.", "Continue while the counter is at most 5.", "Increase the counter during every iteration."],
      steps: ["Initialize the counter.", "Set a condition that eventually becomes false.", "Update the counter inside the loop."],
      code: `item_count = 1\n\nwhile item_count <= 5:\n    print("Item", item_count, "added")\n    item_count += 1\n\nprint("Billing complete")`,
      output: `Item 1 added\nItem 2 added\nItem 3 added\nItem 4 added\nItem 5 added\nBilling complete`,
      explanation: "The statement item_count += 1 changes the condition variable. When it becomes 6, the condition is false and the loop stops."
    }
  ];

  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const menuItems = [
    "Dashboard",
    "Learn Python",
    "Challenges",
    "Case Studies",
    "Progress",
  ];

  function finishLesson() {
    if (!completedLessons.includes(selectedLesson)) {
      setCompletedLessons([...completedLessons, selectedLesson]);
    }

    if (selectedLesson < lessons.length - 1) {
      setSelectedLesson(selectedLesson + 1);
    } else {
      setSelectedLesson(null);
      setActiveTab("Progress");
    }
  }
  function checkChallenge(output) {
  const expected =
    selectedChallenge?.expectedOutput ??
    selectedChallenge?.expected_output ??
    selectedChallenge?.output;

  if (expected === undefined || expected === null) {
    setChallengeFeedback(
      "Code executed successfully! Automatic checking is not configured for this challenge yet."
    );
    return;
  }

const normalizeOutput = (value) =>
  String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .trim();

const actualOutput = normalizeOutput(output);
const expectedOutput = normalizeOutput(expected);
  if (actualOutput === expectedOutput) {
    if (!completedChallenges.includes(selectedChallenge.id)) {
      const updated = [...completedChallenges, selectedChallenge.id];

      setCompletedChallenges(updated);
      localStorage.setItem("completedChallenges", JSON.stringify(updated));
    }

    setChallengeFeedback("🎉 Correct Answer! Challenge completed. +10 points!");
  } else {
    setChallengeFeedback("❌ Incorrect output. Try again!");
  }
}

  return (
    <div className="app-container">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">L</span>
          <h2>LoopMaster</h2>
        </div>

        <p className="menu-heading">MENU</p>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`menu-item ${
                activeTab === item ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab(item);
                setSelectedLesson(null);
                setSelectedChallenge(null);
                setSelectedCaseStudy(null);
              }}
            >
              {item === "Dashboard" && "▦"}
              {item === "Learn Python" && "📚"}
              {item === "Challenges" && "💻"}
              {item === "Case Studies" && "📖"}
              {item === "Progress" && "📊"}
              <span>{item}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="profile">
            <div className="avatar">H</div>
            <div>
              <strong>Python Learner</strong>
              <small>Beginner Level</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        <header className="topbar">
          <div>
            <h2>{activeTab}</h2>
            <p>Learn Python loops, practice and improve your skills.</p>
          </div>

          <div className="topbar-right">
            <span className="status-dot"></span>
            <span>Learning Mode</span>
          </div>
        </header>

        {/* DASHBOARD */}
        {activeTab === "Dashboard" && (
          <>
            <section className="welcome-card">
              <div>
                <span className="tag">YOUR PYTHON JOURNEY</span>
                <h1>Welcome to LoopMaster! 👋</h1>
                <p>
                  Master Python loops through interactive lessons,
                  visual learning and coding challenges.
                </p>

                <button
                  className="primary-btn"
                  onClick={() => setActiveTab("Learn Python")}
                >
                  Start Learning →
                </button>
              </div>

              <div className="welcome-icon">🐍</div>
            </section>
            
            

            <section className="stats-grid">
              <div className="stat-card">
                <span>📚</span>
                <h3>{lessons.length}</h3>
                <p>Total Lessons</p>
              </div>

              <div className="stat-card">
                <span>💻</span>
                <h3>{challenges.length}</h3>
                <p>Coding Challenges</p>
              </div>

              <div className="stat-card">
                <span>⭐</span>
                <h3>{completedLessons.length}</h3>
                <p>Completed Lessons</p>
              </div>

              <div className="stat-card">
                <span>🔥</span>
                <h3>0</h3>
                <p>Learning Streak</p>
              </div>
            </section>

            <section className="section">
              <div className="section-heading">
                <div>
                  <h2>Python Learning Path</h2>
                  <p>Start with the basics and become a loop expert.</p>
                </div>

                <button
                  className="text-btn"
                  onClick={() => setActiveTab("Learn Python")}
                >
                  View all →
                </button>
              </div>

              {loading ? (
                <p>Loading lessons...</p>
              ) : (
                <div className="lesson-grid">
                  {lessons.slice(0, 4).map((lesson, index) => (
                    <div className="lesson-card" key={lesson.id}>
                      <div className="lesson-number">
                        0{index + 1}
                      </div>

                      <h3>{lesson.title}</h3>
                      <p>{lesson.description}</p>

                      <div className="lesson-footer">
                        <span>{lesson.topic}</span>
                        <button
                          onClick={() => {
                            setActiveTab("Learn Python");
                            setSelectedLesson(index);
                          }}
                        >
                          Explore →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="section">
              <div className="section-heading">
                <div>
                  <h2>Practice Challenges</h2>
                  <p>Test your Python programming knowledge.</p>
                </div>

                <button
                  className="text-btn"
                  onClick={() => setActiveTab("Challenges")}
                >
                  View all →
                </button>
              </div>

              <div className="challenge-grid">
                {challenges.slice(0, 3).map((challenge) => (
                  <div
                    className="challenge-card"
                    key={challenge.id}
                    onClick={() => {
                      setSelectedChallenge(challenge);
                      setActiveTab("Challenges");
                    }}
                  >
                    <span className="challenge-label">
                      {challenge.difficulty}
                    </span>

                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                    <span className="topic">{challenge.topic}</span>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* LEARN PYTHON */}
        {activeTab === "Learn Python" && (
          <section className="section">

            {selectedLesson === null ? (
              <>
                <h2>Python Learning Path 🐍</h2>
                <p>Select a lesson to start learning.</p>

                <div className="lesson-grid">
                  {lessons.map((lesson, index) => (
                    <div className="lesson-card" key={lesson.id}>
                      <div className="lesson-number">
                        0{index + 1}
                      </div>

                      <h3>{lesson.title}</h3>
                      <p>{lesson.description}</p>

                      <button
                        className="primary-btn"
                        onClick={() => setSelectedLesson(index)}
                      >
                        Start Lesson →
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : lessons[selectedLesson] && (
              <div className="lesson-detail">

                <button
                  className="text-btn"
                  onClick={() => setSelectedLesson(null)}
                >
                  ← Back to Lessons
                </button>

                <h1>{lessons[selectedLesson].title}</h1>
                <p>{lessons[selectedLesson].description}</p>

                <div className="lesson-content">
                  <h2>What will you learn?</h2>
                  <p>
                    {lessonContent[lessons[selectedLesson].order]?.explanation}
                  </p>
                </div>
                <LearningWizard challenge={selectedChallenge} />

                <div className="lesson-content">
                  <h2>Python Example</h2>
                  <pre>
                    {lessonContent[lessons[selectedLesson].order]?.example}
                  </pre>

                  <h3>Expected Output</h3>
                  <pre className="output-box">
                    {lessonContent[lessons[selectedLesson].order]?.output}
                  </pre>
                </div>

                <div className="lesson-content">
                  <h2>Practice Question</h2>
                  <p>
                    {lessonContent[lessons[selectedLesson].order]?.practice}
                  </p>
                </div>
<LoopSimulator
  title={lessons[selectedLesson].title}
  code={
    lessonContent[lessons[selectedLesson].order]?.example || ""
  }
  output={
    lessonContent[lessons[selectedLesson].order]?.output || ""
  }
/>
<LearningWizard
  lesson={lessons[selectedLesson]}
  lessonDetails={
    lessonContent[lessons[selectedLesson].order]
  }
/>
                <button
                  className="primary-btn"
                  onClick={finishLesson}
                >
                  {selectedLesson < lessons.length - 1
                    ? "Complete & Next Lesson →"
                    : "Finish Lessons"}
                </button>
              </div>
            )}
          </section>
        )}

        {/* CHALLENGES AND PYTHON EDITOR */}
        {activeTab === "Challenges" && (
          <section className="section">

            {selectedChallenge === null ? (
              <>
                <h2>Python Coding Challenges</h2>
                <p>Choose a challenge and improve your coding skills.</p>

                <div className="challenge-grid">
                  {challenges.map((challenge) => (
                    <div
                      className="challenge-card"
                      key={challenge.id}
                      onClick={() => setSelectedChallenge(challenge)}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="challenge-label">
                        {challenge.difficulty}
                      </span>

                      <h3>{challenge.title}</h3>
                      <p>{challenge.description}</p>
                      <span className="topic">{challenge.topic}</span>

                      <br />

                      <button className="primary-btn">
                        Solve Challenge →
                      </button>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="lesson-detail">

                <button
                  className="text-btn"
                  onClick={() => setSelectedChallenge(null)}
                >
                  ← Back to Challenges
                </button>

                <h1>{selectedChallenge.title}</h1>

                <p>{selectedChallenge.description}</p>

                <div className="lesson-content">
                  <span className="challenge-label">
                    {selectedChallenge.difficulty}
                  </span>

                  <h2>Your Task</h2>

                  <p>
                    Solve this Python problem using loops.
                    Write your solution in the code editor below.
                  </p>
                </div>

                <div className="lesson-content">
                  <h2>Python Code Editor</h2>

                  <p>
                    Write your Python code and click Run Python Code
                    to see the output.
                  </p>

                  <PythonSandbox
  key={selectedChallenge.id}
  onRun={checkChallenge}
  starterCode={selectedChallenge.starterCode}
/>
<CodeBuilder challenge={selectedChallenge} />
                  {challengeFeedback && (
  <div className="challenge-feedback">
    {challengeFeedback}
  </div>
)}
                </div>

              </div>
            )}

          </section>
        )}


        {/* CASE STUDIES */}
        {activeTab === "Case Studies" && (
          <section className="section">
            {selectedCaseStudy === null ? (
              <>
                <h2>Practical Python Loop Case Studies 📖</h2>
                <p>Explore real-world examples for all 8 loop topics. Select a case study to see the problem, steps, code and output.</p>
                <div className="lesson-grid">
                  {caseStudies.map((study) => (
                    <div className="lesson-card" key={study.id}>
                      <div className="lesson-number">{String(study.id).padStart(2, "0")}</div>
                      <span className="topic">{study.topic}</span>
                      <h3>{study.title}</h3>
                      <p>{study.situation}</p>
                      <div className="lesson-footer">
                        <button className="primary-btn" onClick={() => setSelectedCaseStudy(study.id)}>
                          View Case Study →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              (() => {
                const study = caseStudies.find((item) => item.id === selectedCaseStudy);
                return study ? (
                  <div className="lesson-detail">
                    <button className="text-btn" onClick={() => setSelectedCaseStudy(null)}>
                      ← Back to Case Studies
                    </button>
                    <span className="topic">{study.topic}</span>
                    <h1>{study.title}</h1>
                    <div className="lesson-content">
                      <h2>Real-World Problem</h2>
                      <p>{study.situation}</p>
                    </div>
                    <div className="lesson-content">
                      <h2>Requirements</h2>
                      <ul>{study.requirements.map((item, index) => <li key={index}>{item}</li>)}</ul>
                    </div>
                    <div className="lesson-content">
                      <h2>Step-by-Step Approach</h2>
                      <ol>{study.steps.map((item, index) => <li key={index}>{item}</li>)}</ol>
                    </div>
                    <div className="lesson-content">
                      <h2>Python Solution</h2>
                      <pre>{study.code}</pre>
                    </div>
                    <div className="lesson-content">
                      <h2>Expected Output</h2>
                      <pre className="output-box">{study.output}</pre>
                    </div>
                    <div className="lesson-content">
                      <h2>How the Loop Works</h2>
                      <p>{study.explanation}</p>
                    </div>
                    <button
                      className="primary-btn"
                      onClick={() => setSelectedCaseStudy(selectedCaseStudy < caseStudies.length ? selectedCaseStudy + 1 : null)}
                    >
                      {selectedCaseStudy < caseStudies.length ? "Next Case Study →" : "Back to All Case Studies"}
                    </button>
                  </div>
                ) : null;
              })()
            )}
          </section>
        )}

        {/* PROGRESS */}
        {activeTab === "Progress" && (
          <section className="section">
            <h2>Your Learning Progress</h2>
            <p>Track your completed lessons.</p>

            <div className="progress-card">
              <h3>Learning Journey</h3>
              <div className="progress-card">
  <h3>Challenge Progress</h3>

  <h1>
    {completedChallenges.length} / {challenges.length}
  </h1>

  <p>Challenges completed</p>

  <h2>⭐ {completedChallenges.length * 10} Points</h2>
</div>

              <h1>
                {lessons.length > 0
                  ? Math.round(
                      (completedLessons.length / lessons.length) * 100
                    )
                  : 0}%
              </h1>

              <div className="progress-bar">
                <div
                  style={{
                    width: `${
                      lessons.length > 0
                        ? (completedLessons.length / lessons.length) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>

              <p>
                {completedLessons.length} out of {lessons.length} lessons
                completed.
              </p>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}

export default App;