import { rename as fsRename } from "node:fs/promises";
import { existsSync } from "node:fs";
import { URL } from "url";

const rename = async () => {
  // Write your code here
  const __dirname = new URL(".", import.meta.url).pathname;
  const oldPath = `${__dirname}files/wrongFilename.txt`;
  const newPath = `${__dirname}files/properFilename.md`;

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