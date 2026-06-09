import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProject } from "../api/projects";
import type { Project } from "../types";
import { notes } from "../data/mockdata";
import { FaArrowLeft } from "react-icons/fa";

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      const data = await getProject(id!);
      if (data) setProject(data);
      setLoading(false);
    };
    loadProject();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found.</div>;

  function getDate(date: string): string {
    const dateObj = new Date(date + "T00:00:00");

    const options = {
      month: "long",
      day: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    } as const;

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObj);

    return formattedDate;
  }

  return (
    <div className="flex flex-col py-10 px-20 gap-8 min-h-screen text-text-primary">
      <a href="/" className="flex items-center gap-2 text-lg font-bold hover:text-text-primary/60 ease-in-out duration-300 ">
        <FaArrowLeft /> Go back
      </a>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">{project.name}</h1>
        <p>{getDate(project.deadline)}</p>
        <p className="text-text-muted">{project.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold font-sans ml-2">Notes</h2>
        <div className="flex flex-col gap-3">
          {notes.map((note) => {
            return (
              <div id={note.id} className="flex flex-col gap-3 border p-4 rounded-2xl border-text-muted/50">
                <div className="flex gap-4 items-center">
                  <p className="text-2xl font-bold font-sans">{note.title}</p>
                  <p className="bg-warning px-2 rounded-full text-xs">{note.type}</p>
                </div>
                <p>{note.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
