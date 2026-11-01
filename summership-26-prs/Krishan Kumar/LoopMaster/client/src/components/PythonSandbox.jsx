import { useEffect, useRef, useState } from "react";

export default function PythonSandbox({ onRun, starterCode }) {
  const [code, setCode] = useState(
    starterCode || `for i in range(1, 11):
    print(i)`
  );

  const [output, setOutput] = useState("Initializing Python...");
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);

  const pyodideRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    async function initializePython() {
      try {
        // Load Pyodide from CDN
        if (!window.loadPyodide) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");

            script.src =
              "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js";

            script.onload = resolve;
            script.onerror = () =>
              reject(new Error("Could not load Pyodide. Check your internet connection."));

            document.body.appendChild(script);
          });
        }

        const pyodide = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/",
        });

        if (mounted) {
          pyodideRef.current = pyodide;
          setLoading(false);
          setOutput("Python is ready! Write your code and click Run.");
        }
      } catch (error) {
        if (mounted) {
          setLoading(false);
          setOutput("Python initialization error: " + error.message);
        }
      }
    }

    initializePython();

    return () => {
      mounted = false;
    };
  }, []);

async function runCode() {
  if (!pyodideRef.current) {
    setOutput("Python is not ready yet. Please wait.");
    return;
  }

  setRunning(true);
  let capturedOutput = "";

  try {
    pyodideRef.current.setStdout({
      batched: (text) => {
        capturedOutput += text + "\n";
      },
    });

    pyodideRef.current.setStderr({
      batched: (text) => {
        capturedOutput += text + "\n";
      },
    });

    await pyodideRef.current.runPythonAsync(code);

    const finalOutput = capturedOutput.trim();

    setOutput(finalOutput || "Code executed successfully. No output.");

    if (onRun) {
      onRun(finalOutput);
    }
  } catch (error) {
    setOutput("Error:\n" + error.message);

    if (onRun) {
      onRun(null);
    }
  } finally {
    setRunning(false);
  }
}


function resetCode() {
  setCode(
    starterCode || `for i in range(1, 11):
    print(i)`
  );

  setOutput("Code reset. Click Run Python Code to execute.");
}

  return (
    <div className="python-sandbox">
      <div className="sandbox-header">
        <div>
          <h2>Python Code Editor</h2>
          <p>Write, run and test your Python loop programs.</p>
        </div>

        <span className={`python-status ${loading ? "loading" : "ready"}`}>
          {loading ? "Loading Python..." : "Python Ready"}
        </span>
      </div>

      <textarea
        className="python-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
        placeholder="Write your Python code here..."
        disabled={loading || running}
      />

      <div className="editor-buttons">
        <button
          className="run-button"
          onClick={runCode}
          disabled={loading || running}
        >
          {running ? "Running..." : "▶ Run Python Code"}
        </button>

        <button className="reset-button" onClick={resetCode}>
          Reset Code
        </button>
      </div>

      <div className="output-section">
        <h3>Output</h3>
        <pre className="python-output">{output}</pre>
      </div>
    </div>
  );
}