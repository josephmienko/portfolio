import React from "react";
import "./_project.scss";

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
};

export function Project({ title, description, image, link, slug }: ProjectProps) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={`/projects/${slug}`} className="btn btn-outline-primary">
          View Project
        </a>
      </div>
    </div>
  );
}
