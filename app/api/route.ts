// Import necessary modules
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize the Stripe library with your secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Cast the apiVersion to 'any' to bypass the type error
  apiVersion: '2022-11-15' as any,
});


// Function to fetch picture data from your database (implement this function)
async function getPictureById(pictureId: string) {
  // Replace this with your actual database query logic
  // Example using a mock database
  const picturesDatabase = [
    {
      id: '1',
      isSold: false,
      priceWithFrameId: 'price_1QBLmsJ93I2Tg3FXYdMdJNhN',
      priceWithoutFrameId: 'price_1QBLlKJ93I2Tg3FXiilIl9rP',
    },
  ];

  return picturesDatabase.find((picture) => picture.id === pictureId) || null;
}

// Define an async function to handle POST requests
export const POST = async (req: NextRequest) => {
  try {
    const { pictureId, wantFrame } = await req.json(); // Extract pictureId and wantFrame

    if (typeof pictureId !== 'string' || typeof wantFrame !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request parameters.' }, { status: 400 });
    }

    // Fetch and validate picture data
    const picture = await getPictureById(pictureId);

    if (!picture) {
      return NextResponse.json({ error: 'Picture not found.' }, { status: 404 });
    }

    if (picture.isSold) {
      return NextResponse.json({ error: 'Picture is already sold.' }, { status: 400 });
    }

    // Determine the priceId based on wantFrame
    const priceId = wantFrame ? picture.priceWithFrameId : picture.priceWithoutFrameId;

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        pictureId: pictureId,
      },
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN}/paymentSuccessful`,
      cancel_url: `${process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN}/paymentFailed`,
    });

    // Return the session ID to the client
    return NextResponse.json(
      { sessionId: session.id },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (err: any) {
    console.error('Error creating Stripe Checkout Session:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error.' },
      { status: err.statusCode || 500 }
    );
  }
};

