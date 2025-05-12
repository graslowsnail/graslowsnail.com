import Blog from "@/components/Blog";
import { sampleBlogs } from "@/constants";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 px-4 sm:px-16">
      <h1 className="text-4xl font-normal text-center mb-12 font-['Koulen']">
        BLOG
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {sampleBlogs.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}
            title={blog.title}
            date={blog.date}
          />
        ))}
      </div>
    </main>
  );
}
