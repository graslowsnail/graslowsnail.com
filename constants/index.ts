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
        date: "March 22, 2025"
    },
    {
    "id": 2,
    "title": "I'm breaking up with you.",
    "content": "Hey, I've been meaning to talk to you about something that's been on my mind.\n\nLook, I don't want to waste any of your time, and honestly, I don't think we should see each other anymore. I think this relationship has taken a toll on me in a negative way.\n\nI constantly panic if you're not by my side. I glance at you every second I can. I get lost in your eyes for endless hours.\n\nYou honestly bring out the worst in me...\n\nI find myself staying up late, losing sleep over you. In the morning, the first thing that comes to my mind is YOU, and I panic if you're not by my side. I could lay there for hours with you, even if I know I have plenty to do.\n\nYou're perfect, your looks, your sense of humor. In every way, you're perfect. But when I'm with you, I constantly seek your validation, and put you fist. My life revolves around you. I spend almost every hour I'm awake with you.\n\nI can't do this anymore. There are things that I like to do, places I want to see, dreams I want to fulfill—and our relationship is taking that away from me. Even though you give me the freedom to do whatever I want, I still feel chained to you, and I've had enough.\n\nSo, iPhone, I'm breaking up with you.",
    "date": "May 11, 2025"
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
