import { useEffect, useState } from "react";

export default function LearningWizard({
  lesson,
  lessonDetails,
  challenge,
}) {
  const [step, setStep] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const isChallenge = Boolean(challenge);
  const item = challenge || lesson;

  const steps = isChallenge
    ? [
        {
          title: "1. Understand the Challenge",
          heading: challenge?.title,
          description: challenge?.description,
        },
        {
          title: "2. Think About the Approach",
          heading: "How can you solve this problem?",
          description:
            "Read the problem carefully. Identify which loop is useful and what should happen in each iteration.",
          example: challenge?.starterCode?.trim()
            ? challenge.starterCode
            : "Write your Python loop here.",
        },
        {
          title: "3. Get a Hint",
          heading: "Need some help?",
          description: challenge?.hint || "Break the problem into smaller steps.",
        },
        {
          title: "4. Check the Solution",
          heading: "Compare your approach",
          description: "Reveal the solution when you are ready.",
          example: challenge?.solution,
        },
        {
          title: "5. Expected Output",
          heading: "What should your program produce?",
          example: challenge?.expectedOutput,
        },
      ]
    : [
        {
          title: "1. Understand the Lesson",
          heading: lesson?.title,
          description: lesson?.description,
        },
        {
          title: "2. Discover the Concept",
          heading: "What will you learn?",
          description: lessonDetails?.explanation,
        },
        {
          title: "3. Follow the Example",
          heading: "Understand the Python code",
          example: lessonDetails?.example,
        },
        {
          title: "4. Check the Output",
          heading: "What does this code produce?",
          example: lessonDetails?.output,
        },
        {
          title: "5. Practice",
          heading: "Your turn!",
          description: lessonDetails?.practice,
        },
      ];

  useEffect(() => {
    setStep(0);
    setShowSolution(false);
  }, [lesson, challenge]);

  const current = steps[step];

  function nextStep() {
    setStep((previous) => Math.min(previous + 1, steps.length - 1));
    setShowSolution(false);
  }

  function previousStep() {
    setStep((previous) => Math.max(previous - 1, 0));
    setShowSolution(false);
  }

  function restart() {
    setStep(0);
    setShowSolution(false);
  }

  if (!item) {
    return (
      <div className="learning-wizard">
        <h2>🧭 Interactive Learning Wizard</h2>
        <p>Select a lesson or challenge to start learning.</p>
      </div>
    );
  }

  return (
    <div className="learning-wizard">
      <div className="wizard-header">
        <h2>🧭 Interactive Learning Wizard</h2>
        <p>
          Learn through guided steps, examples and practice.
        </p>
      </div>

      <div className="wizard-progress">
        <div
          className="wizard-progress-fill"
          style={{
            width: `${((step + 1) / steps.length) * 100}%`,
          }}
        />
      </div>

      <p className="wizard-step-count">
        Step {step + 1} of {steps.length}
      </p>

      <div className="wizard-content">
        <span className="wizard-tag">{current.title}</span>

        <h3>{current.heading || "Learning Activity"}</h3>

        {current.description && (
          <p>{current.description}</p>
        )}

        {current.example && (
          <>
            {isChallenge && step === 3 ? (
              <>
                <button
                  className="wizard-check-btn"
                  onClick={() => setShowSolution(!showSolution)}
                >
                  {showSolution ? "Hide Solution" : "Show Solution"}
                </button>

                {showSolution && (
                  <pre className="wizard-code">
                    {current.example}
                  </pre>
                )}
              </>
            ) : (
              <pre className="wizard-code">
                {current.example}
              </pre>
            )}
          </>
        )}
      </div>

      <div className="wizard-navigation">
        <button onClick={previousStep} disabled={step === 0}>
          ← Previous
        </button>

        {step === steps.length - 1 ? (
          <button onClick={restart}>
            Restart Wizard ↻
          </button>
        ) : (
          <button onClick={nextStep}>
            Next Step →
          </button>
        )}
      </div>
    </div>
  );
}