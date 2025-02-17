import React from "react";
import "./_blog.scss";

type BlogPostProps = {
  id: number;
  title: string;
  slug: string;
  cover: string;
  author: string;
  content: string;
};

export function BlogPost({ title, slug, cover, author, content }: BlogPostProps) {
  return (
    <div className="container mt-4">
      <h2 className="text-primary">{title}</h2>
      <p className="text-muted">By {author}</p>
      <img src={cover} className="img-fluid mb-3" alt={title} />
      <p>{content}</p>
    </div>
  );
}
