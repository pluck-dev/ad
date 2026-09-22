'use client';
import { useEffect, useState } from 'react';
import { Bookmark, Check, CheckCircle2, PencilLine } from 'lucide-react';
import type { DocumentSummary } from '@/lib/content';
import { useProgress } from './progress';
export function DocumentActions({ id }: { id: string }) {
  const { progress, ready, toggle, visit } = useProgress();
  useEffect(() => { if (ready) visit(id); }, [id, ready, visit]);
  return <div className="document-actions"><button disabled={!ready} className={progress.saved.includes(id) ? 'secondary-button is-saved' : 'secondary-button'} aria-pressed={progress.saved.includes(id)} onClick={() => toggle('saved', id)}><Bookmark size={16} />{progress.saved.includes(id) ? '저장됨' : '북마크'}</button><button disabled={!ready} className="secondary-button" aria-pressed={progress.completed.includes(id)} onClick={() => toggle('completed', id)}><Check size={16} />{progress.completed.includes(id) ? '읽음 완료' : '읽음 표시'}</button></div>;
}
export function StudyTools({ document }: { document: DocumentSummary }) {
  const { progress, ready, storageError, toggle, note } = useProgress();
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const quiz = document.quiz;
  return <section className="study-tools" id="practice"><p className="eyebrow">MAKE IT YOURS</p><h2>이제, 나의 것으로 만들어 보세요.</h2>{quiz && <div className="quiz-box"><span className="small-label">이해도 확인</span><h3>{quiz.question}</h3><fieldset><legend className="sr-only">정답을 선택하세요</legend>{quiz.options.map((option, i) => <label className={`quiz-option ${selected === i ? 'selected' : ''} ${checked && i === quiz.answer ? 'correct' : ''}`} key={option}><input type="radio" name={`quiz-${document.id}`} checked={selected === i} onChange={() => { setSelected(i); setChecked(false); }} /><span>{option}</span></label>)}</fieldset><button className="secondary-button" disabled={selected === null} onClick={() => setChecked(true)}>답 확인하기</button>{checked && <p role="status" className="quiz-feedback"><strong>{selected === quiz.answer ? '정답이에요! ' : '다시 생각해 볼까요? '}</strong>{quiz.explanation}</p>}</div>}<div className="exercise-box"><h3><PencilLine size={19} /> 작은 실행, 한 가지</h3><p>{document.exercise || '이 문서에서 내 일에 적용할 수 있는 한 가지를 적어보세요.'}</p><label htmlFor={`note-${document.id}`} className="sr-only">실습 메모</label><textarea id={`note-${document.id}`} disabled={!ready} placeholder="나의 생각과 실행 계획을 자유롭게 적어보세요…" value={progress.notes[document.id] || ''} onChange={e => note(document.id, e.target.value)} /><small>{storageError ? '브라우저 저장이 불가능합니다. 메모를 별도로 복사해 두세요.' : '자동 저장 · 이 브라우저에서만 보관됩니다.'}</small></div><button className={`primary-button complete-button ${progress.completed.includes(document.id) ? 'finished' : ''}`} disabled={!ready} onClick={() => toggle('completed', document.id)}><CheckCircle2 size={19} />{progress.completed.includes(document.id) ? '학습 완료 · 다시 학습하려면 클릭' : '이 단원 학습 완료하기'}</button></section>;
}
