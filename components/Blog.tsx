'use client'
import { useState, useEffect } from 'react';

interface BlogProps {
    title: string;
    content: string;
    date: string;
}

const HeartIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
);

const Blog = ({ title, content, date }: BlogProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [likes, setLikes] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasLiked, setHasLiked] = useState(false);

    // Load likes from API and check if user has liked when component mounts
    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const response = await fetch(`/api/likes?title=${encodeURIComponent(title)}`);
                const data = await response.json();
                setLikes(data.likes);
            } catch (error) {
                console.error('Error fetching likes:', error);
            } finally {
                setIsLoading(false);
            }
        };

        // Check if user has already liked this blog
        const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
        setHasLiked(likedBlogs.includes(title));

        fetchLikes();
    }, [title]);

    const handleLike = async (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent modal from opening when clicking the like button
        
        // If user has already liked, don't do anything
        if (hasLiked) return;

        try {
            const response = await fetch('/api/likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            const data = await response.json();
            setLikes(data.likes);
            
            // Mark this blog as liked in localStorage
            const likedBlogs = JSON.parse(localStorage.getItem('likedBlogs') || '[]');
            likedBlogs.push(title);
            localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs));
            setHasLiked(true);
        } catch (error) {
            console.error('Error updating likes:', error);
        }
    };

    // Format the content to preserve whitespace and line breaks
    const formattedContent = content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="mb-6 indent-8 text-gray-800 leading-relaxed">
            {paragraph.trim()}
        </p>
    ));

    return (
        <>
            <div 
                className="cursor-pointer p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-[20px] hover:from-purple-100 hover:to-pink-100 transition-all duration-300 shadow-sm hover:shadow-md"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-normal text-gray-800 font-['Koulen']">{title}</h2>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={handleLike}
                            className={`flex items-center gap-1 transition-colors ${hasLiked ? 'text-pink-500' : 'text-gray-800 hover:text-pink-500'}`}
                        >
                            <HeartIcon />
                            <span className="text-sm font-medium">{isLoading ? '...' : likes}</span>
                        </button>
                        <p className="text-sm text-gray-800 font-medium">{date}</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="p-4 text-2xl font-normal text-gray-800 font-['Koulen']">{title}</h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <button 
                                    onClick={handleLike}
                                    className={`flex items-center gap-1 transition-colors ${hasLiked ? 'text-pink-500' : 'text-gray-800 hover:text-pink-500'}`}
                                >
                                    <HeartIcon />
                                    <span className="text-sm font-medium">{isLoading ? '...' : likes}</span>
                                </button>
                                <p className="text-gray-800 font-medium">{date}</p>
                            </div>
                            <div className="prose max-w-none">
                                {formattedContent}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blog; 