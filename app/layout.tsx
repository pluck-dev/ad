import type { Metadata } from 'next';
import { Shell } from '@/components/shell';
import { summaries } from '@/lib/content';
import './globals.css';
export const metadata: Metadata = { title: { default: '마케팅 노트 · 배우고, 실행하고, 쌓아가세요', template: '%s | 마케팅 노트' }, description: '나만의 마케팅 학습 코스와 실무 위키', robots: { index: false, follow: false } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><Shell documents={summaries}>{children}</Shell></body></html>;
}
