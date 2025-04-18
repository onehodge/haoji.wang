import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Haoji Wang',
  description: 'Personal website of Haoji Wang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-4 sm:px-6 pb-8 min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-grow">{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
} 