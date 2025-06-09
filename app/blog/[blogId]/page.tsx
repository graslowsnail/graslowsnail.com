import { readFile } from 'fs/promises'
import path from "path";
import matter from 'gray-matter'
import RenderContent from './RenderContent';


interface BlogPageProps {
    params: {
        blogId: string;
    };
}

export default async function BlogPage({ params }: BlogPageProps) {
    try {
    // read markdown 
    const filePath = path.join(process.cwd(), 'app/blog/content', `${params.blogId}.md`)
    const fileContent = await readFile(filePath, 'utf8')

    // parse fontmatter and content 
    const { data: frontmatter, content } = matter(fileContent)

    return (
        <RenderContent frontmatter={frontmatter as any} content={content}/>
    );
} catch (error) {
    return (
        <main className="min-h-screen pt-24 px-4 sm:px-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-normal font-['Koulen']">Blog not found</h1>
                </div>
            </main>
    )

}
} 
