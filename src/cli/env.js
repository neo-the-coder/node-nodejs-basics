const parseEnv = () => {
  // Write your code here
  const PREFIX = "RSS_";
  const variablesWithPrefix = Object.entries(process.env)
    .filter(([key, value]) => key.startsWith(PREFIX))
    .map(([key, value]) => `${key}=${value}`);

  console.log(variablesWithPrefix.join("; "));
};

parseEnv();
