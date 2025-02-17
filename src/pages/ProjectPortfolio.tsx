import React from "react";

type ProjectPortfolioProps = {
  slug?: string;
};

export function ProjectPortfolio({ slug }: ProjectPortfolioProps) {
  return (
    <div className="container mt-4">
      <h1>Projects</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
