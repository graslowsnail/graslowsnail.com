'use client'
import { sampleBlogs } from '@/constants';
import { useState, useEffect } from 'react';

interface BlogPageProps {
    params: {
        blogId: string;
    };
}

export default function BlogPage({ params }: BlogPageProps) {
    const blog = sampleBlogs.find(blog => blog.id === parseInt(params.blogId));

    if (!blog) {
        return (
            <main className="min-h-screen pt-24 px-4 sm:px-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-normal font-['Koulen']">Blog not found</h1>
                </div>
            </main>
        );
    }

    const formattedContent = blog.content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="indent-8 text-gray-800 leading-7">
            {paragraph.trim()}
        </p>
    ));

    return (
        <main className="min-h-screen pt-24 px-4 sm:px-16">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-normal font-['Koulen'] mb-2">{blog.title}</h1>
                    <div className="flex items-center justify-center gap-6">
                        <p className="text-gray-600">{blog.date}</p>
                    </div>
                </div>
                <article className="prose max-w-none space-y-0">
                    {formattedContent}
                </article>
            </div>
        </main>
    );
} 
