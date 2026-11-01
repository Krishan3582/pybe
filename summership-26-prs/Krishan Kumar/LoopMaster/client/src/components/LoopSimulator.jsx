import { useState, useEffect } from "react";

export default function LoopSimulator({
  title = "Python Loop",
  code = `for i in range(1, 6):
    print(i)`,
  output = `1
2
3
4
5`,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const outputLines = String(output)
    .split("\n")
    .filter((line) => line.trim() !== "");

  useEffect(() => {
    setCurrentStep(0);
    setIsFinished(false);
  }, [code, output]);

  function nextIteration() {
    if (currentStep < outputLines.length) {
      setCurrentStep((previous) => previous + 1);
    }

    if (currentStep + 1 >= outputLines.length) {
      setIsFinished(true);
    }
  }

  function runAll() {
    setCurrentStep(outputLines.length);
    setIsFinished(true);
  }

  function resetLoop() {
    setCurrentStep(0);
    setIsFinished(false);
  }

  return (
    <div className="loop-simulator">
      <h2>🔄 Visual Loop Simulator</h2>

      <h3>{title}</h3>

      <p>
        Understand how your Python loop executes step by step.
      </p>

      <div className="simulator-code">
        <h3>Python Code</h3>
        <pre>{code}</pre>
      </div>

      <div className="simulator-status">
        <h3>Execution Progress</h3>

        <h1>
          {isFinished
            ? "Completed"
            : `${currentStep} / ${outputLines.length}`}
        </h1>

        <p>
          {isFinished
            ? "The execution is complete!"
            : currentStep === 0
            ? "Click Next Iteration to begin."
            : `Step ${currentStep} executed.`}
        </p>
      </div>

      <div className="iteration-history">
        <h3>Execution Output</h3>

        {currentStep === 0 ? (
          <p>No output yet. Start the loop!</p>
        ) : (
          <div className="iteration-boxes">
            {outputLines.slice(0, currentStep).map((line, index) => (
              <div className="iteration-box" key={index}>
                <small>Step {index + 1}</small>
                <h2>{line}</h2>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="simulator-buttons">
        <button
          onClick={nextIteration}
          disabled={isFinished}
        >
          Next Iteration
        </button>

        <button onClick={runAll}>
          Run All
        </button>

        <button onClick={resetLoop}>
          Reset
        </button>
      </div>

      {isFinished && (
        <p className="loop-success">
          🎉 Execution completed successfully!
        </p>
      )}
    </div>
  );
}