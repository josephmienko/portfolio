import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDataStore } from "./hooks/useDataStore";
import { Layout } from "./layouts/Layout";
import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import { BlogRoll } from "./pages/BlogRoll";
import { BlogPost } from "./components/Blog/BlogPost";
import { ProjectPortfolio } from "./pages/ProjectPortfolio";
import { NotFound } from "./pages/NotFound";

const BLOG_FILENAME = import.meta.env.VITE_BLOG_GITHUB_FILE || "BlogPostStore.json";

export function App() {
  const { data: blogs, error } = useDataStore<{ id: number; title: string; slug: string; cover: string; author: string; content: string }>(BLOG_FILENAME);

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<ProjectPortfolio />} />
        <Route path="/blog" element={<BlogRoll blogs={blogs} />} />
        <Route path="/blog/:slug" element={<BlogPost blogs={blogs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
