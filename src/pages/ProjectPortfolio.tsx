import React from "react";
import { useDataStore } from "../hooks/useDataStore";
import { Project } from "../components/Project/Project";

const PROJECT_FILENAME = import.meta.env.VITE_PROJECT_GITHUB_FILE || "ProjectStore.json";

export function ProjectPortfolio() {
  const { data: projects, error } = useDataStore<{ id: number; title: string; description: string; image: string; link: string; slug: string }>(PROJECT_FILENAME);

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">My Projects</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Here are some of the projects I’ve worked on, showcasing skills in frontend, backend, and full-stack development.
            </p>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="container mt-4">
        {projects.length > 0 ? (
          <div className="row">
            {projects.map((project, index) => (
              <div key={project.id} className="col-md-6">
                <Project {...project} index={index} /> {/* Ensure index prop is passed */}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Loading projects...</p>
        )}
      </div>
    </>
  );
}
