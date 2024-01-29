import { Worker } from "worker_threads";
import os from "os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const performCalculations = async () => {
  // Write your code here
  // get CPU core number
  const cpuCores = os.cpus().length;
  const workerFile = fileURLToPath(
    path.join(import.meta.url, "..", "worker.js")
  );
  const promises = [];

  for (let i = 0; i < cpuCores; i++) {
    const worker = new Worker(workerFile, { workerData: i + 10 });

    const promise = new Promise((res, rej) => {
      worker.on("error", (err) => rej(err));
      worker.on("message", (msg) => res(msg));
    });

    promises.push(promise);
  }

  const allSettled = await Promise.allSettled(promises);
  const result = allSettled.map((promise) => promise.value);
  console.log(result);
};

await performCalculations();
