export interface Blog {
    id: number;
    title: string;
    content: string;
    date: string;
}

export const sampleBlogs: Blog[] = [
    {
        id: 1,
        title: "LIFE WITHOUT A PHONE ( ONE HOUR )",
        content: `My phone broke, and I had to leave it at the Apple store for an hour.

It's kinda crazy to think that 20 years ago, smartphones and social media addiction didn't even exist.

People just had to live life in the moment—which is exactly what I was forced to do during that hour.

In that hour, I walked around a little city center, but for some reason, I felt a bit "naked" without my phone.

I saw something that I definitely would've taken a picture of. But thinking about it now, that picture probably would've been lost forever anyway (my iCloud is full, btw).

Waiting for my food sucked—no YouTube podcasts or streams to keep me entertained while eating.

I guess you could say I was forced to genuinely be in the moment.

The walk back to the Apple store wasn't that bad, though—I had my iPod Classic with some music I'd downloaded (legally, of course).

Honestly, that hour was pretty nice. I recommend leaving your phone at home for a day or at least in your room for an hour. It might surprise you.`,
        date: "March 22, 2024"
    }
];

export const footerLinks = [
    {
        title: "Socials",
        links: [
            { title: "Instagram", url: "https://www.instagram.com/graslowsnail/" },
            { title: "Twitter", url: "https://twitter.com/graslowsnail" },
            { title: "GitHub", url: "https://github.com/graslowsnail" },
        ],
    },
];

export const catigories = [
    {
        title: ""
    }
];

export const testPicture = [
    {
        "_id": "3QZ4bchMXB",
        "album_id": "NYC",
        "albumThumbnail": true,
        "description": "a picture of sergio in barcelona",
        "imageURL": "https://graslowsnail.s3.us-east-2.amazonaws.com/Sergio.jpg",
        "isSold": false,
        "price": 100,
        "printSize": "12x14",
        "title": "picture of sergio"
    }
]; 
