import React from "react";
import { Layout } from "../layouts/Layout";
import { AboutInfo } from "../components/About/AboutInfo";

export function About() {
  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="text-center mb-4">About Me</h1>
        <AboutInfo />
      </div>
    </Layout>
  );
}
