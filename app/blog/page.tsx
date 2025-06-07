import { sampleBlogs } from "@/constants";
import Link from "next/link";

type BlogProps = {
  isLast: boolean
  id: number
}

const Blog = ({isLast, id}: BlogProps) => {
  let rowBorder
   isLast ? (rowBorder = "relative hover:bg-violet-100 cursor-pointer") : (rowBorder='relative border-b border-violet-200 hover:bg-violet-100 cursor-pointer')

  return (
    <tr className={`${rowBorder} `}>
      <td className="py-4 px-2 font-mono">2021</td>
      <td className="py-4 px-2 font-mono">Making the Web, Faster.</td>
      <td className="py-4 px-2 text-right text-gray-500 font-mono ">90,685</td>
      <Link
        href={`/blog/${id}`}
        className="absolute inset-0 font-mono"
        aria-label="Read Making the Web, Faster"
      />
    </tr>
  );
};

export default function BlogPage() {

  return (
    <main className="min-h-screen pt-24 px-4 sm:px-16 ">
      <h1 className="text-4xl text-center mb-12 font-['Koulen']">
        BLOG
      </h1>
      
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
            <Blog isLast={false} id={2}/>
            <Blog isLast={false} id={1}/>
            <Blog isLast={true} id={0}/>
          </tbody>

        </table>
      </div>

    </main>
  );
}
