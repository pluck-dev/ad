import { notFound } from 'next/navigation';
import { Library } from '@/components/library';
import { summaries } from '@/lib/content';
import { shareMetadata } from '@/lib/metadata';
const groups: Record<string, string> = { playbook: '실무 플레이북', research: '리서치 원문', cases: '고객 사례' };
export async function generateMetadata({ params }: { params: Promise<{ group: string }> }) {
  const { group } = await params;
  if (!groups[group]) notFound();
  return { ...shareMetadata(`${groups[group]} | 마케팅 노트`, `${groups[group]} 자료를 한곳에서 읽고 필요한 내용을 검색하고 저장하세요.`, `/library/${group}`), title: groups[group] };
}
export function generateStaticParams() { return Object.keys(groups).map(group => ({ group })); }
export default async function Page({ params }: { params: Promise<{ group: string }> }) { const { group } = await params; if (!groups[group]) notFound(); return <Library documents={summaries} group={groups[group]} />; }
