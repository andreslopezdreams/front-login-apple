import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import '../app/styles/reset.css';
import '../app/styles/utils.css';
import '../app/styles/globals.css';
import { enviroment } from './utils/contants/enviroment';
import NextTopLoader from 'nextjs-toploader';
import { metadataSite } from './utils/meta/site';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = metadataSite();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${plusJakartaSans.variable} ${enviroment.APP_THEME ?? ''}`}
      >
        <NextTopLoader color='var(--primary-color)' />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
