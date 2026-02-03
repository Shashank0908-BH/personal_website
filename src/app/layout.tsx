import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Antigravity | AI-Driven Biotechnologist',
  description: 'Portfolio of an AI-Driven Biotechnologist & Startup Founder specializing in Drug Discovery and Generative AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
