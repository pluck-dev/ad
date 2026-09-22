'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Bookmark, BookOpen, Check, ChevronRight, Home, Library, Menu, Search, Sprout, X } from 'lucide-react';
import type { DocumentSummary } from '@/lib/content';
import { ProgressProvider, useProgress } from './progress';
type SearchEntry = { id: string; title: string; group: string; text: string };
export function Shell({ documents, children }: { documents: DocumentSummary[]; children: React.ReactNode }) {
  return <ProgressProvider><Layout documents={documents}>{children}</Layout></ProgressProvider>;
}
function Layout({ documents, children }: { documents: DocumentSummary[]; children: React.ReactNode }) {
  const path = usePathname();
  const { progress, storageError } = useProgress();
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<SearchEntry[]>([]);
  const [status, setStatus] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const lessons = documents.filter(d => d.lesson);
  const done = lessons.filter(d => progress.completed.includes(d.id)).length;
  async function openSearch() {
    dialog.current?.showModal(); input.current?.focus();
    if (!index.length) {
      setStatus('검색 자료를 불러오고 있어요…');
      try { const response = await fetch('/api/search'); if (!response.ok) throw new Error(); setIndex(await response.json()); setStatus(''); }
      catch { setStatus('검색 자료를 불러오지 못했어요. 닫고 다시 열어 주세요.'); }
    }
  }
  useEffect(() => { setMenu(false); dialog.current?.close(); }, [path]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); void openSearch(); } if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler);
  });
  const term = query.trim().toLocaleLowerCase();
  const results = term ? index.filter(d => `${d.title} ${d.text}`.toLocaleLowerCase().includes(term)).sort((a, b) => Number(b.title.toLocaleLowerCase().includes(term)) - Number(a.title.toLocaleLowerCase().includes(term))).slice(0, 30) : [];
  function nav(href: string, label: string, icon: React.ReactNode) { return <Link onClick={() => setMenu(false)} href={href} className={`nav-item ${path === href ? 'active' : ''}`}>{icon}<span>{label}</span></Link>; }
  return <><a href="#main-content" className="skip-link">본문으로 건너뛰기</a>
    {menu && <button className="mobile-overlay" aria-label="메뉴 닫기" onClick={() => setMenu(false)} />}
    <aside className={`sidebar ${menu ? 'open' : ''}`} aria-label="주 메뉴">
      <Link href="/" className="brand"><span className="brand-icon"><Sprout size={23} /></span><span>마케팅 노트<small>LEARN. BUILD. GROW.</small></span></Link>
      <button className="search-trigger" onClick={openSearch}><Search size={16} /><span>무엇이 궁금한가요?</span><kbd>Ctrl K</kbd></button>
      <nav>{nav('/', '학습 홈', <Home size={17} />)}{nav('/library', '전체 지식 라이브러리', <Library size={17} />)}{nav('/saved', '내가 저장한 문서', <Bookmark size={17} />)}
      <p className="nav-label">차근차근 배우기 <span>8</span></p>
      {lessons.map(d => <Link onClick={() => setMenu(false)} key={d.id} className={`lesson-nav ${path === `/docs/${d.id}` ? 'active' : ''}`} href={`/docs/${d.id}`}><span className={progress.completed.includes(d.id) ? 'number done' : 'number'}>{progress.completed.includes(d.id) ? <Check size={12} /> : String(d.lesson).padStart(2, '0')}</span><span>{d.title}</span></Link>)}
      <p className="nav-label">필요할 때 찾아보기</p>
      {nav('/library/playbook', '실무 플레이북', <BookOpen size={17} />)}{nav('/library/research', '리서치 & 검증', <Search size={17} />)}{nav('/library/cases', '고객 사례', <ArrowUpRight size={17} />)}</nav>
      <div className="sidebar-bottom"><div><span>나의 학습 여정</span><strong>{done} / 8</strong></div><div className="progress-track"><span style={{ width: `${done / 8 * 100}%` }} /></div><small>{storageError ? '저장 공간을 사용할 수 없어 현재 세션에만 반영됩니다.' : '학습 기록은 이 브라우저에 저장돼요.'}</small></div>
    </aside>
    <div className="workspace"><header className="topbar"><button className="icon-button mobile-menu" aria-label="메뉴 열기" aria-expanded={menu} onClick={() => setMenu(!menu)}><Menu size={21} /></button><span className="breadcrumb">나의 학습 공간 <ChevronRight size={13} /> <b>{path === '/' ? '학습 홈' : path.startsWith('/docs') ? '문서 읽기' : path === '/saved' ? '저장한 문서' : '지식 라이브러리'}</b></span><span className="topbar-note"><i /> 매일 조금씩, 나만의 속도로</span><button className="icon-button mobile-search" aria-label="검색 열기" onClick={openSearch}><Search size={19} /></button></header>
    <main id="main-content">{children}</main><footer className="footer"><Sprout size={14} /> 마케팅 노트 <span>배운 것을 실행으로, 실행을 나의 자산으로.</span></footer></div>
    <dialog ref={dialog} className="search-dialog" aria-labelledby="search-title" onClick={e => { if (e.target === dialog.current) dialog.current.close(); }}>
      <div className="search-head"><Search size={20} /><label id="search-title" className="sr-only" htmlFor="global-search">전체 문서 검색</label><input ref={input} id="global-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="용어, 실무, 궁금한 내용을 검색하세요" /><button className="icon-button" aria-label="검색 닫기" onClick={() => dialog.current?.close()}><X size={20} /></button></div>
      <div className="search-results" aria-live="polite">{status ? <p className="search-hint">{status}</p> : !term ? <p className="search-hint">예: 리테이너, 네이버, 가격, 온보딩</p> : results.length === 0 ? <p className="search-hint">검색 결과가 없어요. 다른 단어로 찾아보세요.</p> : results.map(d => { const i = d.text.toLocaleLowerCase().indexOf(term); return <Link key={d.id} href={`/docs/${d.id}`} onClick={() => dialog.current?.close()}><small>{d.group}</small><strong>{d.title}</strong><p>{d.text.slice(Math.max(0, i - 45), Math.max(0, i - 45) + 150)}…</p></Link>; })}</div><div className="search-bottom">제목과 본문 전체에서 검색합니다 <kbd>Esc 닫기</kbd></div>
    </dialog></>;
}
