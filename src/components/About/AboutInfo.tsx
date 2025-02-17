import React from "react";
import "./_about.scss";

export function AboutInfo() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer building innovative solutions in web
        development. My work spans across front-end and back-end technologies,
        focusing on scalable and maintainable applications.
      </p>
      <h3>My Skills</h3>
      <ul>
        <li>React, Vue, and Angular</li>
        <li>TypeScript & JavaScript</li>
        <li>Node.js & Express</li>
        <li>Cloud Computing (AWS, Firebase)</li>
      </ul>
      <h3>My Journey</h3>
      <p>
        I started coding at a young age, always fascinated by how technology
        shapes our world. Today, I work on modern web applications that deliver
        impact.
      </p>
    </div>
  );
}
