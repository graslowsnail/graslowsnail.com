import { NextResponse } from 'next/server';

// This is a simple in-memory store. In production, you'd want to use a database
let likesStore: { [key: string]: number } = {};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');

    if (title) {
        return NextResponse.json({ likes: likesStore[title] || 0 });
    }

    return NextResponse.json({ likes: 0 });
}

export async function POST(request: Request) {
    const { title } = await request.json();

    if (!title) {
        return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    // Increment likes
    likesStore[title] = (likesStore[title] || 0) + 1;

    return NextResponse.json({ likes: likesStore[title] });
} 