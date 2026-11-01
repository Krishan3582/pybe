import { useEffect, useState } from "react";

export default function CodeBuilder({ challenge }) {
  const [lines, setLines] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const solutionLines = (challenge?.solution || "")
    .split("\n")
    .filter((line) => line.trim() !== "");

  function shuffleLines(items) {
    const shuffled = items.map((line, index) => ({
      id: index,
      text: line,
    }));

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    if (
      shuffled.length > 1 &&
      shuffled.every((item, index) => item.id === index)
    ) {
      [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }

    return shuffled;
  }

  useEffect(() => {
    setLines(shuffleLines(solutionLines));
    setFeedback("");
    setCompleted(false);
    setDraggedIndex(null);
  }, [challenge]);

  function handleDragStart(index) {
    setDraggedIndex(index);
  }

  function handleDrop(targetIndex) {
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const updated = [...lines];
    const [movedLine] = updated.splice(draggedIndex, 1);
    updated.splice(targetIndex, 0, movedLine);

    setLines(updated);
    setDraggedIndex(null);
    setFeedback("");
    setCompleted(false);
  }

  function checkCode() {
    const correct = lines.every(
      (line, index) => line.id === index
    );

    if (correct) {
      setFeedback("🎉 Excellent! Your code is in the correct order.");
      setCompleted(true);
    } else {
      setFeedback("❌ Not quite right. Arrange the statements again.");
      setCompleted(false);
    }
  }

  function resetCode() {
    setLines(shuffleLines(solutionLines));
    setFeedback("");
    setCompleted(false);
    setDraggedIndex(null);
  }

  if (!challenge) {
    return (
      <div className="code-builder">
        <h2>🧩 Drag-and-Drop Code Builder</h2>
        <p>Select a challenge to arrange its Python code.</p>
      </div>
    );
  }

  if (solutionLines.length === 0) {
    return (
      <div className="code-builder">
        <h2>🧩 Drag-and-Drop Code Builder</h2>
        <p>No solution is available for this challenge yet.</p>
      </div>
    );
  }

  return (
    <div className="code-builder">
      <div className="builder-header">
        <h2>🧩 Drag-and-Drop Code Builder</h2>
        <p>Arrange the Python statements in the correct order.</p>
      </div>

      <div className="builder-instruction">
        <h3>{challenge.title}</h3>
        <p>{challenge.description}</p>
        <span>{challenge.difficulty}</span>
      </div>

      <div className="builder-workspace">
        <h3>Arrange Your Code</h3>

        {lines.map((line, index) => (
          <div
            key={line.id}
            className="code-line"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(index)}
          >
            <span className="line-number">{index + 1}</span>
            <code>{line.text}</code>
            <span className="drag-icon">☰</span>
          </div>
        ))}
      </div>

      <div className="builder-buttons">
        <button onClick={checkCode}>Check Code</button>
        <button onClick={resetCode}>Reset</button>
      </div>

      {feedback && (
        <div className={completed ? "builder-success" : "builder-error"}>
          {feedback}
        </div>
      )}
    </div>
  );
}