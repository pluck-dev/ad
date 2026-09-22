import Link from 'next/link';
export default function NotFound() { return <div className="empty-page"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>문서를 찾지 못했어요.</h1><p>목차나 검색에서 다시 찾아보세요.</p><Link className="primary-button" href="/">학습 홈으로 돌아가기 →</Link></div>; }
