import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { URL } from "url";

const list = async () => {
  // Write your code here
  const path = new URL("./files", import.meta.url).pathname;

  try {
    // throw error if path does not exist
    if (!existsSync(path)) {
      throw new Error("FS operation failed");
    }

    const files = await readdir(path);
    console.log(files);
  } catch (err) {
    console.log(err);
  }
};

await list();
