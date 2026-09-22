import { notFound } from 'next/navigation';
import { Library } from '@/components/library';
import { summaries } from '@/lib/content';
const groups: Record<string, string> = { playbook: '실무 플레이북', research: '리서치 원문', cases: '고객 사례' };
export function generateStaticParams() { return Object.keys(groups).map(group => ({ group })); }
export default async function Page({ params }: { params: Promise<{ group: string }> }) { const { group } = await params; if (!groups[group]) notFound(); return <Library documents={summaries} group={groups[group]} />; }
