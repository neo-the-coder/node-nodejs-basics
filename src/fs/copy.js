import { existsSync } from "node:fs";
import { cp } from "node:fs/promises";
import { URL } from "url";

const copy = async () => {
  // Write your code here
  const __dirname = new URL(".", import.meta.url).pathname;
  const source = `${__dirname}files`;
  const dest = `${__dirname}files_copy`;

  try {
    // check if source folder does not exist or destination folder already exists
    if (!existsSync(source) || existsSync(dest)) {
      throw new Error("FS operation failed");
    }
    // Copy source folder into destination with content
    await cp(source, dest, { recursive: true }, (err) => {
      if (err) {
        throw new Error(err);
      }
      console.info(
        "Source folder has been copied to the destination successfully!"
      );
    });
  } catch (err) {
    console.error(err);
  }
};

await copy();
