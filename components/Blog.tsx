import Link from 'next/link';

interface BlogProps {
    id: number;
    title: string;
    date: string;
}

const Blog = ({ id, title, date }: BlogProps) => {


    return (
        <Link href={`/blog/${id}`}>
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-[20px] hover:from-purple-100 hover:to-pink-100 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-normal text-gray-800 font-['Koulen']">{title}</h2>
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-gray-800 font-medium">{date}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Blog; 
