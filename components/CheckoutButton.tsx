'use client'
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton({ wantFrame, pictureId }: any) {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    fetch(`${process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN}/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pictureId, wantFrame }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Network response was not ok');
        }
        return response.json();
      })
      .then((session) => {
        return stripe?.redirectToCheckout({ sessionId: session.sessionId });
      })
      .catch((error) => {
        console.error('Error redirecting to Stripe Checkout:', error);
      });
  };

  return (
    <section className="bg-white flex flex-col w-96 h-9 rounded-md justify-between">
      <button
        type="button"
        role="link"
        onClick={handleCheckout}
        className="h-9 bg-black text-white font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80 shadow-md"
      >
        PURCHASE
      </button>
    </section>
  );
}

