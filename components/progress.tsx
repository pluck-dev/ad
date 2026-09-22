'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
type Progress = { completed: string[]; saved: string[]; notes: Record<string, string>; last: string | null };
const empty: Progress = { completed: [], saved: [], notes: {}, last: null };
const key = 'marketing-notes-v1';
const Context = createContext<{ progress: Progress; ready: boolean; storageError: boolean; toggle: (field: 'completed' | 'saved', id: string) => void; visit: (id: string) => void; note: (id: string, value: string) => void } | null>(null);
export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(empty);
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState(false);
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(key) || 'null');
      if (stored && typeof stored === 'object') setProgress({
        completed: Array.isArray(stored.completed) ? stored.completed.filter((x: unknown) => typeof x === 'string') : [],
        saved: Array.isArray(stored.saved) ? stored.saved.filter((x: unknown) => typeof x === 'string') : [],
        notes: stored.notes && typeof stored.notes === 'object' && !Array.isArray(stored.notes) ? Object.fromEntries(Object.entries(stored.notes).filter(([, v]) => typeof v === 'string')) as Record<string, string> : {},
        last: typeof stored.last === 'string' ? stored.last : null,
      });
    } catch { setStorageError(true); }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem(key, JSON.stringify(progress)); } catch { setStorageError(true); } } }, [progress, ready]);
  const toggle = useCallback((field: 'completed' | 'saved', id: string) => setProgress(p => ({ ...p, [field]: p[field].includes(id) ? p[field].filter(x => x !== id) : [...p[field], id] })), []);
  const visit = useCallback((id: string) => setProgress(p => p.last === id ? p : ({ ...p, last: id })), []);
  const note = useCallback((id: string, value: string) => setProgress(p => ({ ...p, notes: { ...p.notes, [id]: value } })), []);
  return <Context.Provider value={{ progress, ready, storageError, toggle, visit, note }}>{children}</Context.Provider>;
}
export function useProgress() { const value = useContext(Context); if (!value) throw new Error('ProgressProvider missing'); return value; }
