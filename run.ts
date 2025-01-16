import { execSync } from "child_process";
import path from "path";
import fs from "fs";

const problemNumber = process.argv[2];

if (!problemNumber) {
  console.error("❌ Please specify a problem number.");
  process.exit(1);
}

// Find the problem folder
const problemDir = fs.readdirSync(__dirname).find((dir) =>
  dir.startsWith(`${problemNumber}.`)
);

if (!problemDir) {
  console.error(`❌ No problem found for number ${problemNumber}`);
  process.exit(1);
}

const testFilePath = path.join(__dirname, problemDir, "solution.test.ts");

if (!fs.existsSync(testFilePath)) {
  console.error(`❌ Test file not found: ${testFilePath}`);
  process.exit(1);
}

console.log(`✅ Running tests for: ${problemDir}...`);
execSync(`npx jest ${testFilePath}`, { stdio: "inherit" });
