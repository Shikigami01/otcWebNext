import type { Metadata } from 'next';
import 'the-new-css-reset/css/reset.css';
import '../styles/globals.scss';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const siteName = 'Over The Coffee';
const description = 'Over The Coffee Official Web Site';
const url = 'https://overthecoffee.net/';

export const metadata: Metadata = {
  title: {
    default: `${siteName}`,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@HouraijiN',
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL('https://overthecoffee.net/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
