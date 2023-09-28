// sets page layout for project
import './globals.css'
import { Navbar, Footer } from '@/components';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'graslowsnail',
  description: 'Discover photos taken around the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='relative flex flex-col min-h-screen'>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
        </body>
    </html>
  )
}

