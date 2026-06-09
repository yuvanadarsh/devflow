import { FaXmark } from "react-icons/fa6";
// import { projects } from "../data/mockdata";
import { useState } from "react";

import { type Project, type ProjectStatus } from "../types/index";

interface CreateCardProps {
  onClose: () => void;
  onCreate: () => void;
}

// export interface Project {
//   name: string;
//   id: string;
//   status: ProjectStatus;
//   deadline: string;
//   pinned: boolean;
//   description: string;
//   created_at: string;
//   updated_at: string;
// }

async function createProject(newProject: Project): Promise<Project | null> {
  try {
    const response = await fetch("http://127.0.0.1:8000/projects", {
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

export default function CreateCard({ onClose, onCreate }: CreateCardProps) {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<ProjectStatus>("In Progress");
  const [deadline, setDeadline] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProject: Project = {
      name: name,
      id: crypto.randomUUID(),
      status: status,
      deadline: deadline,
      pinned: false,
      description: description,
      created_at: new Date().toString(),
      updated_at: new Date().toString(),
    };

    const created = await createProject(newProject);
    if (created) {
      onCreate();
      onClose();
    }

    onClose();
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-200 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      {/* Modal Surface Box */}
      <div onClick={(e) => e.stopPropagation()} className="max-w-xl w-full bg-bg border border-text-primary/10 rounded-2xl shadow-2xl p-6 flex flex-col gap-6">
        {/* Modal Header */}
        <div className="flex flex-row justify-between items-center border-b border-text-primary/10 pb-4">
          <h2 className="text-xl font-bold font-mono tracking-tight">Create New Project</h2>
          <button onClick={onClose} className="p-1 rounded-lg text-text-primary/40 hover:text-text-primary hover:bg-text-primary/5 transition-all" aria-label="Close modal">
            <FaXmark className="text-2xl" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Row 1: Name & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Project Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-text-primary/80">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-10 bg-transparent border border-text-primary/20 hover:border-text-primary/40 focus:border-primary/60 px-3 py-2 outline-none rounded-xl text-sm transition-colors"
                placeholder="DevFlow Dashboard, etc."
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Project Status */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="status" className="text-sm font-medium text-text-primary/80">
                Project Status
              </label>
              <select
                name="status"
                id="status"
                className="w-full h-10 bg-transparent border border-text-primary/20 hover:border-text-primary/40 focus:border-primary/60 rounded-xl px-3 text-sm outline-none transition-colors cursor-pointer"
                defaultValue="In Progress"
                onChange={(e) => setStatus(e.target.value as ProjectStatus)}
              >
                <option value="Backlog" className="bg-slate-900 text-white">
                  Backlog
                </option>
                <option value="In Progress" className="bg-slate-900 text-white">
                  In Progress
                </option>
                <option value="Completed" className="bg-slate-900 text-white">
                  Completed
                </option>
              </select>
            </div>
          </div>

          {/* Row 2: Deadline */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="deadline" className="text-sm font-medium text-text-primary/80">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              className="w-full h-10 bg-transparent border border-text-primary/20 hover:border-text-primary/40 focus:border-primary/60 rounded-xl px-3 py-2 text-sm outline-none transition-colors
                         [&::-webkit-calendar-picker-indicator]:invert-0 dark:[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              required
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* Row 3: Description */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="description" className="text-sm font-medium text-text-primary/80">
              Project Description
            </label>
            <textarea
              id="description"
              className="w-full min-h-30 max-h-60 bg-transparent border border-text-primary/20 hover:border-text-primary/40 focus:border-primary/60 px-3 py-2 outline-none rounded-xl text-sm transition-colors resize-y"
              placeholder="Describe the goals and scope of this project..."
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Form Action Controls */}
          <div className="flex justify-end items-center gap-3 pt-4 border-t border-text-primary/10 mt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium border border-text-primary/20 rounded-xl hover:bg-text-primary/5 transition-colors cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2 text-sm font-medium text-background bg-primary/90 hover:bg-primary rounded-xl transition-colors shadow-sm cursor-pointer">
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
