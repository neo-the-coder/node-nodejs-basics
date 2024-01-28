const parseArgs = () => {
  // Write your code here
  const userArgs = process.argv.slice(2);
  let result = [];

  for (let i = 0; i < userArgs.length; i += 2) {
    result.push(userArgs[i].replace(/--/, "") + " is " + userArgs[i + 1]);
  }
  console.log(result.join(", "));
};

parseArgs();
