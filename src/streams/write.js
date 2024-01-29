import { createWriteStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const write = async () => {
  // Write your code here
  const fileToWrite = fileURLToPath(
    path.join(import.meta.url, "..", "files", "fileToWrite.txt")
  );
  const writableStream = createWriteStream(fileToWrite);

  process.stdin.pipe(writableStream);

  writableStream.on("error", (error) => {
    console.error(error.message);
  });
};

await write();
