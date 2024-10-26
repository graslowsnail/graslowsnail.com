// api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Cast the apiVersion to 'any' to bypass the type error
  apiVersion: '2022-11-15' as any,
});

const pictureWithFramePrice = 'price_1QBLmsJ93I2Tg3FXYdMdJNhN';
const pictureWithoutFramePrice = 'price_1QBLlKJ93I2Tg3FXiilIl9rP';

export const POST = async (req: NextRequest) => {
  try {
    const { pictureId, wantFrame } = await req.json();

    if (typeof pictureId !== 'string' || typeof wantFrame !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request parameters.' }, { status: 400 });
    }

    const priceId = wantFrame ? pictureWithFramePrice : pictureWithoutFramePrice;

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

