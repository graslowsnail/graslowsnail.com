import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type BlogProps = {
  isLast: boolean;
  id: number;
  title: string;
  date: string;
};

const Blog = ({ isLast, id, title, date }: BlogProps) => {
  let rowBorder;
  isLast
    ? (rowBorder = "hover:bg-violet-100 cursor-pointer")
    : (rowBorder = "border-b border-violet-200 hover:bg-violet-100 cursor-pointer");

  return (
    <tr className={`${rowBorder}`}>
      <td className="py-4 px-2 font-mono">
        <Link href={`/blog/${id}`} className="block w-full h-full">
          {date}
        </Link>
      </td>
      <td className="py-4 px-2 font-mono">
        <Link href={`/blog/${id}`} className="block w-full h-full">
          {title}
        </Link>
      </td>
      <td className="py-4 px-2 text-right text-gray-500 font-mono">
        <Link href={`/blog/${id}`} className="block w-full h-full">
          .
        </Link>
      </td>
    </tr>
  );
};

export default async function BlogPage() {
  try {
    // Read ALL markdown files
    const postsDirectory = path.join(process.cwd(), "app/blog/content");
    const filenames = await readdir(postsDirectory);
    
    const posts = await Promise.all(
      filenames
        .filter(name => name.endsWith('.md'))
        .map(async (filename) => {
          const filePath = path.join(postsDirectory, filename);
          const fileContent = await readFile(filePath, 'utf8');
          const { data: frontmatter } = matter(fileContent);
          
          return {
            id: parseInt(filename.replace('.md', '')),
            title: frontmatter.title,
            date: frontmatter.date,
          };
        })
    );

    // Sort by ID (newest first)
    const sortedPosts = posts.sort((a, b) => b.id - a.id);

    return (
      <main className="min-h-screen pt-24 px-4 sm:px-16 ">
        <h1 className="text-4xl text-center mb-12 font-['Koulen']">BLOG</h1>

        <div className="max-w-4xl mx-auto space-y-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-violet-300">
                <th className="py-4 px-2 text-gray-600 font-normal font-mono">date</th>
                <th className="py-4 px-2 text-gray-600 font-normal font-mono">title</th>
                <th className="py-4 px-2 text-gray-600 font-normal text-right font-mono">views</th>
              </tr>
            </thead>
            <tbody className="">
              {sortedPosts.map((post, index) => (
                <Blog
                  key={post.id}
                  isLast={index === sortedPosts.length - 1}
                  id={post.id}
                  title={post.title}
                  date={post.date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="min-h-screen pt-24 px-4 sm:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-normal font-['Koulen']">ERROR LOADING BLOGS</h1>
        </div>
      </main>
    );
  }
}
