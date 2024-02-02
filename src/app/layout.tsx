import type { Metadata } from 'next';
import './globals.css';
import { App } from './App';

export const metadata: Metadata = {
  title: 'B-Music',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh-cn'>
      <App>{children}</App>
    </html>
  );
}
