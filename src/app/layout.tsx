import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UI Wireframe Template',
  description: 'Next.js App Router プロジェクトテンプレート',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
