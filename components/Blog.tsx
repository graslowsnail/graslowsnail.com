import Link from "next/link";


const Blog = () => {
  return (
    <tr className="relative border-b border-violet-200 hover:bg-violet-100 cursor-pointer">
      <td className="py-4 px-2">2021</td>
      <td className="py-4 px-2">Making the Web, Faster.</td>
      <td className="py-4 px-2 text-right text-gray-500">90,685</td>
      <Link
        href={`/blog/1`}
        className="absolute inset-0"
        aria-label="Read Making the Web, Faster"
      />
    </tr>
  );
};

export default Blog;
