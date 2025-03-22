import Blog from "@/components/Blog";

const sampleBlogs = [
  {
    id: 1,
    title: "Life without a phone (One hour)",
    content: `
        My phone (iphone 15 pro max black titanium) broke, and I had to leave it at the Apple store for an hour. 
        It's kinda crazy to think that 20 years ago, smartphones and social media addiction didn't exist.
        People just had to live life in the moment—which is exactly what I was forced to do during that hour.

        I ended up walking around a little city center, but for some reason, I felt a bit "naked" without my phone.
        While walking, I saw something that I definitely would've taken a picture of.
        But thinking about it now, that picture probably would've been lost forever in my camera roll anyways (my iCloud is full, btw).

        Waiting for my food sucked—no YouTube podcasts or streams to keep me entertained while eating.
        I guess you could say I was forced to genuinely be in the moment.
        The walk back to the Apple store wasn't that bad, though—I had my iPod Classic with some music I'd downloaded (legally).

        Honestly, that hour was pretty nice. I recommend leaving your phone at home for a day—or at least in your room for an hour. It might surprise you.
    `,
    date: "March 22, 2024",
  },
];

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
            title={blog.title}
            content={blog.content}
            date={blog.date}
          />
        ))}
      </div>
    </main>
  );
}
