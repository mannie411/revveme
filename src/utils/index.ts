import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getMarkdownData(filename: string) {
  // removes the file extension
  const fileName = filename.replace(/\.md/, "");
  const filePath = path.join(process.cwd() + "/public", `${fileName}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    slug: fileName,
    ...data,
    content,
  };
}

export {};
