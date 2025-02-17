import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BlogPost } from "../components/Blog/BlogPost";

type BlogPostData = {
  id: number;
  title: string;
  slug: string;
  cover: string;
  author: string;
  content: string;
};

export function BlogPostRendered() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPostData | null>(null);

  useEffect(() => {
    fetch("/BlogPostStore.json")
      .then((response) => response.json())
      .then((data) => {
        const foundBlog = data.find((b: BlogPostData) => b.slug === slug);
        setBlog(foundBlog);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, [slug]);

  if (!blog) {
    return <h2 className="text-center">Blog not found</h2>;
  }

  return <BlogPost {...blog} />; // ✅ Pass all properties correctly
}
