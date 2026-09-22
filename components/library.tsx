'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Bookmark, Search } from 'lucide-react';
import type { DocumentSummary } from '@/lib/content';
import { useProgress } from './progress';
export function Library({ documents, group, saved = false }: { documents: DocumentSummary[]; group?: string; saved?: boolean }) {
  const [query, setQuery] = useState('');
  const { progress, toggle, ready } = useProgress();
  const filtered = documents.filter(d => (saved ? progress.saved.includes(d.id) : !d.lesson) && (!group || d.group === group || (group === '리서치 원문' && d.source.startsWith('playbook/18_'))) && `${d.title} ${d.description}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="library-page"><p className="eyebrow">{saved ? 'MY COLLECTION' : 'KNOWLEDGE LIBRARY'}</p><h1>{saved ? '다시 읽고 싶은 문서' : group || '지식 라이브러리'}</h1><p className="page-description">{saved ? '배움의 순간을 저장해 두고, 필요할 때 꺼내 보세요.' : '긴 리서치부터 바로 쓰는 매뉴얼까지. 필요한 지식을 찾아보세요.'}</p><div className="library-search"><Search size={18} /><input aria-label="문서 목록 필터" placeholder="문서 제목과 소개로 찾기" value={query} onChange={e => setQuery(e.target.value)} /></div><div className="library-tabs"><Link className={!group && !saved ? 'selected' : ''} href="/library">전체</Link><Link className={group === '실무 플레이북' ? 'selected' : ''} href="/library/playbook">실무 플레이북</Link><Link className={group === '리서치 원문' ? 'selected' : ''} href="/library/research">리서치 & 검증</Link><Link className={group === '고객 사례' ? 'selected' : ''} href="/library/cases">고객 사례</Link></div><p className="result-count">{filtered.length}개의 문서</p><div className="library-list">{filtered.map(d => <div className="library-row" key={d.id}><Link href={`/docs/${d.id}`}><small>{d.group} · 약 {d.minutes}분</small><h2>{d.title}<ArrowUpRight size={17} /></h2><p>{d.description}</p></Link><button className={`icon-button ${progress.saved.includes(d.id) ? 'is-saved' : ''}`} disabled={!ready} aria-label={`${d.title} 북마크`} aria-pressed={progress.saved.includes(d.id)} onClick={() => toggle('saved', d.id)}><Bookmark size={19} /></button></div>)}</div>{filtered.length === 0 && <div className="empty-state"><Bookmark size={30} /><h2>{saved ? '아직 저장한 문서가 없어요.' : '해당하는 문서가 없어요.'}</h2><p>{saved ? '문서의 북마크 버튼으로 나만의 서재를 만들어 보세요.' : '다른 검색어를 입력해 보세요.'}</p><Link href="/library">전체 문서 둘러보기 →</Link></div>}</div>;
}
