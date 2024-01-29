import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { promisify } from "node:util";
import path from "node:path";
import { fileURLToPath } from "node:url";

const pipe = promisify(pipeline);
const input = fileURLToPath(
  path.join(import.meta.url, "..", "files", "fileToCompress.txt")
);
const output = fileURLToPath(
  path.join(import.meta.url, "..", "files", "archive.gz")
);

const compress = async () => {
  // Write your code here
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  try {
    await pipe(source, gzip, destination);
    console.log('"fileToCompress.txt" has been compressed successfully');
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
};

await compress();
