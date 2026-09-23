import type { Metadata } from 'next';
import { Shell } from '@/components/shell';
import { summaries } from '@/lib/content';
import { shareMetadata, siteUrl, siteName, siteTitle, siteDescription } from '@/lib/metadata';
import './globals.css';
export const metadata: Metadata = {
  ...shareMetadata(siteTitle, siteDescription, '/'),
  metadataBase: siteUrl,
  title: { default: siteTitle, template: `%s | ${siteName}` },
  applicationName: siteName,
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><Shell documents={summaries}>{children}</Shell></body></html>;
}
