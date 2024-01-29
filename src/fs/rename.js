import { rename as fsRename } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
  // Write your code here
  const oldPath = fileURLToPath(path.join(import.meta.url, "..", "files", "wrongFilename.txt"));
  const newPath = fileURLToPath(path.join(import.meta.url, "..", "files", "properFilename.md"));

  try {
    // check if old file does not exist or new file already exists
    if (!existsSync(oldPath) || existsSync(newPath)) {
      throw new Error("FS operation failed");
    }

    await fsRename(oldPath, newPath);
    console.log("File has been renamed successfully!");
  } catch (err) {
    console.log(err);
  }
};

await rename();