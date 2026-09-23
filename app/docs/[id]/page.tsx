import Link from 'next/link';
import path from 'node:path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import { DocsBody } from 'fumadocs-ui/page';
import { Callout } from 'fumadocs-ui/components/callout';
import { ArrowLeft, ArrowRight, Clock, FileText } from 'lucide-react';
import { allDocuments, documents, lessons, correction, getDocument } from '@/lib/content';
import { DocumentActions, StudyTools } from '@/components/study-tools';
import { shareMetadata, siteName } from '@/lib/metadata';
export function generateStaticParams() { return allDocuments.map(d => ({ id: d.id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const document = getDocument(id);
  if (!document) notFound();
  return { ...shareMetadata(`${document.title} | ${siteName}`, document.description, `/docs/${id}`), title: document.title };
}
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const document = getDocument(id);
  if (!document) notFound();
  const { body, ...summary } = document;
  const slugger = new GithubSlugger();
  let fenced = false;
  const headings: { title: string; id: string; level: number }[] = [];
  for (const line of body.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) { fenced = !fenced; continue; }
    const match = !fenced && /^(#{1,6}) (.+)$/.exec(line);
    if (match) { const title = match[2].replace(/[*`]/g, ''); const anchor = slugger.slug(title); if (match[1].length === 2 || match[1].length === 3) headings.push({ title, id: anchor, level: match[1].length }); }
  }
  const next = document.lesson ? lessons[document.lesson] : undefined;
  const previous = document.lesson && document.lesson > 1 ? lessons[document.lesson - 2] : undefined;
  function resolveLink(href: string) {
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;
    let decoded = href; try { decoded = decodeURIComponent(href); } catch { /* Preserve malformed source links as text below. */ }
    const [relative, hash] = decoded.split('#');
    const source = path.posix.normalize(path.posix.join(path.posix.dirname(document!.source), relative));
    const target = documents.find(d => d.source === source);
    return target ? `/docs/${target.id}${hash ? `#${hash}` : ''}` : null;
  }
  return <div className="reader-layout"><article className="reader"><Link className="back-link" href={document.lesson ? '/' : '/library'}><ArrowLeft size={14} />{document.lesson ? '학습 코스' : document.group}</Link><div className="document-label">{document.lesson ? `LESSON ${String(document.lesson).padStart(2, '0')} / 08` : document.group}</div><h1>{document.title}</h1><div className="document-meta"><span><Clock size={14} /> 약 {document.minutes}분</span><span><FileText size={14} /> 원본 자료 기반</span><span>자료 작성일 2026.08.27</span></div><DocumentActions id={document.id} />
    {document.lesson && <div className="learning-goal"><span>이번 단원의 목표</span><p>{document.description}</p></div>}
    {document.id !== correction.id && <Callout className="source-callout" title="원문과 검증 기록을 함께 읽어보세요."><span>기존 자료를 학습용으로 구성했습니다. 수치와 정책의 후속 수정 사항은 </span><Link href={`/docs/${correction.id}`}>검증·보강 문서 →</Link><span>에서 확인하세요.</span></Callout>}
    <DocsBody className="markdown-body"><ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]} rehypePlugins={[rehypeSlug]} components={{
      table: ({ children }) => <div className="table-scroll" tabIndex={0}><table>{children}</table></div>,
      a: ({ href, children }) => { const resolved = resolveLink(href || ''); return resolved ? resolved.startsWith('/docs/') ? <Link href={resolved}>{children}</Link> : <a href={resolved} target={resolved.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a> : <span className="unavailable-link" title={`원본 참고 경로: ${href}`}>{children} <small>(원본 참고)</small></span>; },
      img: ({ alt }) => <span className="image-reference">이미지 참고: {alt || '원본 자료 참조'}</span>,
    }}>{body}</ReactMarkdown></DocsBody>
    <div className="source-reference"><FileText size={16} /><span>원본: {document.source}{document.lesson ? ' · 해당 단원 발췌' : ''}</span></div>
    <StudyTools key={document.id} document={summary} />
    <div className="reader-pagination">{previous ? <Link href={`/docs/${previous.id}`}><small>이전 단원</small><span><ArrowLeft size={16} />{previous.title}</span></Link> : <Link href="/"><small>나의 학습 공간</small><span><ArrowLeft size={16} />학습 홈</span></Link>}{next ? <Link href={`/docs/${next.id}`}><small>다음 단원</small><span>{next.title}<ArrowRight size={16} /></span></Link> : <Link href="/library"><small>다음 탐색</small><span>실무 문서 둘러보기<ArrowRight size={16} /></span></Link>}</div>
    </article><aside className="page-toc"><p>이 페이지에서</p><nav>{headings.map(h => <a key={h.id} className={h.level === 3 ? 'toc-sub' : ''} href={`#${h.id}`}>{h.title}</a>)}<a href="#practice">확인 문제 & 실습 메모</a></nav><div className="toc-tip"><span>✳</span><strong>한 번에 다 외우지 않아도 괜찮아요.</strong><p>필요한 순간 다시 꺼내 읽을 수 있도록 북마크해 두세요.</p></div></aside></div>;
}
