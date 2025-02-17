import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Layout } from "../layouts/Layout";

export function Landing() {
  return (
    <Layout>
      <Hero />
      <div className="container">
        <h2>Welcome to My Portfolio</h2>
        <p>Discover my latest projects and blog posts.</p>
      </div>
    </Layout>
  );
}
