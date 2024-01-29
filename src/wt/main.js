import { Worker } from "worker_threads";
import os from "os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const performCalculations = async () => {
  // Write your code here
  const cpuCores = os.cpus().length;
  const workerFile = fileURLToPath(
    path.join(import.meta.url, "..", "worker.js")
  );
  const result = [];

  for (let i = 0; i < cpuCores; i++) {
    const worker = new Worker(workerFile, { workerData: {num: i + 10} });
    worker.on("error", (err) => console.log(err));
    worker.on("message", (msg) => {
      result.push(msg);
    });
    // worker.on('exit', () => {})
  }
  console.log(result);
};

await performCalculations();
