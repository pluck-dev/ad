import type { Metadata } from 'next';

export const siteName = '마케팅 노트';
export const siteTitle = '마케팅 노트 · 배우고, 실행하고, 쌓아가세요';
export const siteDescription = '마케팅의 기초부터 상품 설계, 고객 확보, 광고 운영까지. 8개 학습 단원과 실무 위키로 배우고, 퀴즈와 메모로 나만의 지식을 쌓아보세요.';
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteUrl = new URL(configuredUrl ? (/^https?:\/\//.test(configuredUrl) ? configuredUrl : `https://${configuredUrl}`) : 'http://localhost:3107');
const image = { url: '/share-card-v1.png', width: 1200, height: 630, alt: '마케팅 노트 — 기초부터 실무까지, 배우고 실행하며 쌓아가는 마케팅 학습 공간', type: 'image/png' };

export function shareMetadata(title: string, description: string, pathname: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: { type: 'website', locale: 'ko_KR', siteName, title, description, url: pathname, images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [{ url: image.url, alt: image.alt }] },
  };
}
