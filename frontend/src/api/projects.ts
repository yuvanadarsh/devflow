import { type Project } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

// Create Project Method
export async function createProject(newProject: Project): Promise<Project | null> {
  const url = `${BASE_URL}/projects`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newProject),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // 3. Parse and type-cast the JSON result
    const data: Project = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to execute POST request:", error);
    return null;
  }
}

export async function editProject(updatedProject: Project): Promise<Project | null> {
  const url = `${BASE_URL}/projects/${updatedProject.id}`;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(updatedProject),
    });

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

// Get Project Method
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

export async function deleteProject(id: string) {
  const url = `${BASE_URL}/projects/${id}`;
  try {
    const response = await fetch(url, {
      method: `DELETE`,
    });

    if (!response.ok) {
      throw new Error("Error Deleting");
    }

    if (response.status === 204) {
      console.log("Item deleted successfully.");
      return;
    }

    const data = await response.json();
    console.log("Deleted data confirmation:", data);
    return data;
  } catch (error) {
    console.error("Failed to execute DELETE request:", error);
  }
}

export async function getProject(id: string): Promise<Project | null> {
  const url = `${BASE_URL}/projects/${id}`;
  try {
    const response = await fetch(url, {
      method: `GET`,
    });

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
