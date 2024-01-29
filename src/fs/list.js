import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const list = async () => {
  // Write your code here
  const pathToRead = fileURLToPath(path.join(import.meta.url, "..", "files"));

  try {
    // throw error if path does not exist
    if (!existsSync(pathToRead)) {
      throw new Error("FS operation failed");
    }

    const files = await readdir(pathToRead);
    console.log(files);
  } catch (err) {
    console.log(err);
  }
};

await list();
