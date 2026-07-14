import { promises as fs } from "fs";
import path from "path";

export async function loadJson<T>(file: string): Promise<T> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    file
  );

  const json = await fs.readFile(filePath, "utf8");

  return JSON.parse(json);
}