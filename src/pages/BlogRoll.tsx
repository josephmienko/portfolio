import { useDataStore } from "../hooks/useDataStore";
import { BlogPost } from "../components/Blog/BlogPost";

export function BlogRoll() {
  const blogPosts = useDataStore<{ id: number; title: string; slug: string; cover: string; author: string; content: string }>(
    "/BlogPostStore.json"
  );

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <div className="row">
        {blogPosts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <BlogPost {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}
