import React from "react";
import { useParams } from "react-router-dom";

type BlogPostType = {
  id: number;
  title: string;
  slug: string;
  cover: string;
  author: string;
  content: string;
};

export function BlogPost({ blogs }: { blogs: BlogPostType[] }) {
  const { slug } = useParams<{ slug: string }>();

  // Find the blog post by slug
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return <h2 className="text-center">Blog not found</h2>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-primary">{blog.title}</h2>
      <p className="text-muted">By {blog.author}</p>
      <img src={blog.cover} className="img-fluid mb-3" alt={blog.title} />
      <p>{blog.content}</p>
    </div>
  );
}
