import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { BlogRoll } from "./pages/BlogRoll";
import { BlogPostRendered } from "./pages/BlogPostRendered"; // Use the new wrapper component
import { ProjectRendered } from "./pages/ProjectRendered" // Use the new wrapper component
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<BlogRoll />} />

        {/* Dynamic Routes for Blog Posts & Projects */}
        <Route path="/blog/:slug" element={<BlogPostRendered />} />
        <Route path="/projects/:slug" element={<ProjectRendered />} /> {/* Use ProjectPage.tsx */}

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
