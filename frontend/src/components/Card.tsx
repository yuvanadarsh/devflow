import { useState } from "react";
import { FaArrowRight, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";
import type { Project, ProjectStatus } from "../types";
import { deleteProject } from "../api/projects";

interface CardProps {
  project: Project;
  onDelete: () => void;
  onEdit: () => void;
}

export default function Card({ project, onDelete, onEdit }: CardProps) {
  function getColor(status: ProjectStatus) {
    if (status === "Completed") {
      return "bg-success";
    } else if (status === "In Progress") {
      return "bg-warning";
    } else {
      return "bg-neutral-400";
    }
  }

  const [isPinned, setIsPinned] = useState<boolean>(project.pinned);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row justify-between items-center border border-text-primary/60 rounded-md p-4 gap-6">
          {/* Left Side: Project Info & Status */}
          <div className="flex flex-row items-center gap-6 min-w-0 flex-1">
            <p className="text-lg font-medium whitespace-nowrap">{project.name}</p>

            {/* Description container handles the truncation gracefully */}
            <div className="min-w-0 flex-1">
              <p className="text-text-primary/50 text-sm truncate">{project.description}</p>
            </div>

            {/* Status Badge */}
            <div className={`${getColor(project.status)} px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap text-background`}>{project.status}</div>
          </div>

          {/* Right Side: Action Controls */}
          <div className="flex flex-row items-center gap-4 border-l border-text-primary/60 pl-6 shrink-0">
            <button onClick={() => setIsPinned(!isPinned)}>
              {isPinned ? <FaBookmark className="text-xl cursor-pointer hover:text-text-primary/60" /> : <FaRegBookmark className="text-xl cursor-pointer hover:text-text-primary/60" />}
            </button>
            <button className="hover:text-primary transition-colors cursor-pointer" aria-label="Edit project" onClick={onEdit}>
              <TfiPencil className="text-xl" />
            </button>
            <button
              className="hover:text-red-600 transition-colors cursor-pointer"
              aria-label="Delete project"
              onClick={async () => {
                const result = await deleteProject(project.id);
                if (result) onDelete();
              }}
            >
              <FiTrash2 className="text-xl text-red-500" />
            </button>
            <button className="flex flex-row items-center gap-2 hover:opacity-80 transition-opacity ml-2 cursor-pointer">
              <p className="text-sm font-medium whitespace-nowrap">
                <a href={`/projects/${project.id}`}>View more</a>
              </p>
              <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
