const obfuscate = (args) => {
  const input = args.join(" ");
  const result = [];
  [...input].forEach((item, index) => {
    if (item === "a") {
      result[index] = 4;
    } else if (item === "e") {
      result[index] = 3;
    } else if (item === "o") {
      result[index] = 0;
    } else if (item === "l") {
      result[index] = 1;
    } else {
      result[index] = item;
    }
  });
  return result.join("");
};

const args = process.argv.slice(2);
console.log(args);
console.log(obfuscate(args));
