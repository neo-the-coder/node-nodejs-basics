import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const spawnChildProcess = async (...args) => {
  // Write your code here
  const scriptPath = fileURLToPath(
    path.join(import.meta.url, "..", "files", "script.js")
  );

  const childProcess = spawn("node", [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess("arg1", "arg2", "arg3");
