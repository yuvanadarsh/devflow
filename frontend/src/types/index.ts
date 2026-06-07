export interface Project {
  name: string;
  id: string;
  status: ProjectStatus;
  deadline: string;
  pinned: boolean;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Note {
  id: string;
  project_id: string;
  title: string;
  content: string;
  type: string;
  created_at: string;
  updated_at: string;
}

export type ProjectStatus = "In Progress" | "Completed" | "Backlog";
