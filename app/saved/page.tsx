import { Library } from '@/components/library';
import { summaries } from '@/lib/content';
import { shareMetadata } from '@/lib/metadata';
export const metadata = { ...shareMetadata('저장한 문서 | 마케팅 노트', '다시 읽고 싶은 마케팅 자료를 북마크하고 나만의 학습 서재를 만들어보세요.', '/saved'), title: '저장한 문서' };
export default function Page() { return <Library saved documents={summaries} />; }
