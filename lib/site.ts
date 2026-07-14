import { loadJson } from "./dataLoader";

export async function getSiteSettings() {
  return loadJson("settings.json");
}