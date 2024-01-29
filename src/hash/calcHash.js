import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
  // Write your code here
  const hash = createHash("sha256");
  const filePath = fileURLToPath(path.join(
    import.meta.url,
    "..",
    "files",
    "fileToCalculateHashFor.txt"
  ));

  const fileStream = createReadStream(filePath);
  // hash the file on chunks of data
  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  //   when no more chunk is left, console log the hex
  fileStream.on("end", () => {
    const hashResult = hash.digest("hex");
    console.log(hashResult);
  });
};

await calculateHash();
