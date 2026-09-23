import { Library } from '@/components/library';
import { summaries } from '@/lib/content';
import { shareMetadata } from '@/lib/metadata';
export const metadata = { ...shareMetadata('지식 라이브러리 | 마케팅 노트', '리서치 원문부터 광고 운영, 영업, 상품 설계까지. 필요한 마케팅 실무 지식을 찾아보세요.', '/library'), title: '지식 라이브러리' };
export default function Page() { return <Library documents={summaries} />; }
