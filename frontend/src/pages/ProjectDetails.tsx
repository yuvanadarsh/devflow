import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProject } from "../api/projects";
import type { Project } from "../types";

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

  return <div>{project.name}</div>;
}

export default ProjectDetails;
