import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { getSiteSettings } from '@/lib/strapi';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await getSiteSettings();
    return {
      title: settings?.siteTitle ?? 'HectorRail — European Rail Freight',
      description: settings?.siteDescription ?? "Scandinavia's largest private rail freight operator — running Sweden to Germany since 2004.",
    };
  } catch {
    return {
      title: 'HectorRail — European Rail Freight',
      description: "Scandinavia's largest private rail freight operator — running Sweden to Germany since 2004.",
    };
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings().catch(() => null);

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer siteSettings={siteSettings} />
        <CookieBanner />
      </body>
    </html>
  );
}
