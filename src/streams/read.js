import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  // Write your code here
  const fileToRead = fileURLToPath(
    path.join(import.meta.url, "..", "files", "fileToRead.txt")
  );
  const readableStream = createReadStream(fileToRead);

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on('error', (err) => {
    console.error(err.message);
  });
};

await read();
