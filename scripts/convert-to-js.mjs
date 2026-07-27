import esbuild from "esbuild";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      walk(full, files);
    } else if (/\.tsx?$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function convertFile(filePath) {
  const ext = path.extname(filePath);
  const newExt = ext === ".tsx" ? ".jsx" : ".js";
  const outPath = filePath.slice(0, -ext.length) + newExt;

  const source = fs.readFileSync(filePath, "utf8");
  const { code } = esbuild.transformSync(source, {
    loader: ext === ".tsx" ? "tsx" : "ts",
    format: "esm",
    target: "es2022",
  });

  fs.writeFileSync(outPath, code, "utf8");
  fs.unlinkSync(filePath);
  console.log(`${path.relative(root, filePath)} -> ${path.relative(root, outPath)}`);
}

const files = walk(root);
for (const file of files) {
  convertFile(file);
}

console.log(`\nConverted ${files.length} files.`);
