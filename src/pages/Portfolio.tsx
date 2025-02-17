import React from "react";
import { useDataStore } from "../hooks/useDataStore";
import { Project } from "../components/Project/Project"; // Ensure correct import path

export function Portfolio() {
  const projects = useDataStore<{ id: number; title: string; description: string; image: string; link: string; slug: string }>(
    "/ProjectStore.json"
  );

  return (
    <div className="container">
      <h1>My Portfolio</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <Project {...project} /> {/* Ensure all props are passed correctly */}
          </div>
        ))}
      </div>
    </div>
  );
}
