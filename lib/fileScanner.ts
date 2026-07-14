import fs from "fs";
import path from "path";

export function getImages(folder: string) {
  const directory = path.join(process.cwd(), "public", folder);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|gif)$/i.test(file)
    )
    .map((file) => ({
      name: file,
      image: `/${folder}/${file}`,
    }));
}