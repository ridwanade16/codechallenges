import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";

const problemNumber = process.argv[2];
const problemTitle = process.argv.slice(3).join("-").toLowerCase();

// Validate the inputs
if (!problemNumber || !problemTitle) {
  console.error("❌ Usage: ts-node scripts/generate.ts <number> <title>");
  process.exit(1);
}

const folderName = `${problemNumber}.${problemTitle}`;
const problemPath = path.join(__dirname, "..", folderName);

// Check if the folder already exists
if (existsSync(problemPath)) {
  console.error(`❌ Problem folder '${folderName}' already exists!`);
  process.exit(1);
}

// Create the problem directory
try {
  mkdirSync(problemPath);
} catch (error) {
  const err = error as Error
  console.error(`❌ Error creating the directory: ${err.message}`);
  process.exit(1);
}

// File templates
const files: Record<string, string> = {
  "solution.ts": `export function solve(input: any): any {
  // Your solution logic here
  return;
}`,
  "solution.test.ts": `import { solve } from "./solution";

describe("${problemTitle}", () => {
  it("should pass sample test", () => {
    expect(solve("test")).toBe("expected_output");
  });
});
`,
  "README.md": `# ${problemNumber}. ${problemTitle.replace(/-/g, " ")}
  
## Problem Statement
  
[Add problem description here]`,
  
  "solution.md": `# Solution Explanation

## Approach
<!-- Describe your approach to solving the problem. -->

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

## Complexity
- **Time complexity**: 
  <!-- Add your time complexity here, e.g., $$O(n)$$ -->
- **Space complexity**: 
  <!-- Add your space complexity here, e.g., $$O(n)$$ -->

## Code
\`\`\`typescript
export function solve(input: any): any {
  // Your solution logic here
}
\`\`\`
`,
};

// Create files inside the problem directory
Object.entries(files).forEach(([fileName, content]) => {
  try {
    writeFileSync(path.join(problemPath, fileName), content);
    console.log(`✅ Created file: ${fileName}`);
  } catch (error) {
    const err = error as Error
    console.error(`❌ Error writing file '${fileName}': ${err.message}`);
  }
});

console.log(`✅ Created problem folder: ${folderName}`);
