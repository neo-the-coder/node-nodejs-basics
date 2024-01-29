import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  // Write your code here
  const file = fileURLToPath(path.join(import.meta.url, "..", "files", "fileToRead.txt"));

  try {
    // throw error if path does not exist
    if (!existsSync(file)) {
      throw new Error("FS operation failed");
    }

    const content = await readFile(file, "utf8");
    console.log(content);
  } catch (err) {
    console.log(err);
  }
};

await read();
