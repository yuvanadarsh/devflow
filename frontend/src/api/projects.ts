import { type Project } from "../types";

async function getProjects(): Promise<Project[] | null> {
  const url = "";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Response Error!");
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
