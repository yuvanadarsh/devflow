import { type Project } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getProjects(): Promise<Project[] | null> {
  const url = `${BASE_URL}/projects`;
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
