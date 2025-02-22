import React from "react";
import { Hero } from "../components/Hero/Hero";

export function Landing() {
  return (
    <div>
      <Hero />
      <div className="container mt-5">
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my blog, projects, and more!</p>
      </div>
    </div>
  );
}
