import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Project } from "../components/Project/Project"; // Correct import path

type ProjectData = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
};

export function ProjectRendered() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    fetch("/ProjectStore.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.find((p: ProjectData) => p.slug === slug);
        setProject(foundProject);
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, [slug]);

  if (!project) {
    return <h2 className="text-center">Project not found</h2>;
  }

  return <Project {...project} />;
}
