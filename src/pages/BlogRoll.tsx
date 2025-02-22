import React from "react";
import { BlogPost } from "../components/Blog/BlogPost";
import { Layout } from "../layouts/Layout";

export function BlogRoll({ blogs }: { blogs: any[] }) {
  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-primary text-center mb-4">Latest Blog Posts</h2>
        <div className="row">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => <BlogPost key={blog.id} {...blog} />)
          ) : (
            <p>Loading blog posts...</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
