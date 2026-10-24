// Task 3: create welcome.txt, then read hello.txt
const fs = require("fs");

// Create welcome.txt with one line
fs.writeFileSync("welcome.txt", "Hello Node");
console.log("welcome.txt created");

// Read and log the content of hello.txt
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading hello.txt:", err.message);
    return;
  }
  console.log(data);
});
