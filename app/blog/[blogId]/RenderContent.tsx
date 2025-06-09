'use client'
import ReactMarkdown from "react-markdown"

type RenderContentProps = {
    frontmatter: {
        title: string,
        date: string,
        [key: string]: any;
    };
    content: string
}

export default function RenderContent({frontmatter, content}: RenderContentProps) {
    return (
        <main className="min-h-screen pt-24 px-4 sm:px-16">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-normal font-['Koulen'] mb-2">{frontmatter.title}</h1>
                    <div className="flex items-center justify-center gap-6">
                        <p className="text-gray-600">{frontmatter.date}</p>
                    </div>
                </div>
                <article className="prose max-w-none space-y-0 font-mono">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </article>
            </div>
        </main>
    )
}