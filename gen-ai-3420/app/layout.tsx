import React from 'react';
import './globals.css';

export const metadata = {
  title: 'AI Recipe Generator',
  description: 'Generate unique and personalized recipes using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
