import React from "react";

export type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
  index?: number; // <-- Add index as an optional prop
};


export function Project({ id, title, description, image, link, slug }: ProjectProps) {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">
          View Project
        </a>
      </div>
    </div>
  );
}
