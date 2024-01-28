import { unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import { URL } from "url";

const remove = async () => {
  // Write your code here
  const __dirname = new URL(".", import.meta.url).pathname;
  const fileToRemove = `${__dirname}files/fileToRemove.txt`;

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
