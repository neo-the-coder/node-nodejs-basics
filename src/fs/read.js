import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { URL } from "url";

const read = async () => {
  // Write your code here
  const file = new URL("./files/fileToRead.txt", import.meta.url).pathname;

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
