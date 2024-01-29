import { unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const remove = async () => {
  // Write your code here
  const fileToRemove = fileURLToPath(path.join(import.meta.url, "..", "files", "fileToRemove.txt"));

  try {
    // check if the file does not exists
    if (!existsSync(fileToRemove)) {
      throw new Error("FS operation failed");
    }

    await unlink(fileToRemove);
    console.log('"fileToRemove.txt" has been deleted successfully!');
  } catch (err) {
    console.log(err);
  }
};

await remove();
