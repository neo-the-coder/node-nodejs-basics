import { access, writeFile } from "node:fs/promises";
import { URL } from "url";

const create = async () => {
  // Write your code here
  const __dirname = new URL(".", import.meta.url).pathname;
  const filePath = `${__dirname}files/fresh.txt`;
  const fileContent = "I am fresh and young";

  try {
    // check if file exists
    await access(filePath);
    // throw an Error if the file exists
    throw new Error("FS operation failed");
  } catch (err) {
    // if file missing error is thrown
    if (err.code === "ENOENT") {
      // create a file and write text to it
      await writeFile(filePath, fileContent);
      console.info(
        "File has been created and the content has been written successfully"
      );
    } else {
        // console log the error besides file missing
        console.error(err);
    }
  }
};

await create();