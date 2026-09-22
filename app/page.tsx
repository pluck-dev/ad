import { Dashboard } from '@/components/dashboard';
import { summaries } from '@/lib/content';
export default function Home() { return <Dashboard documents={summaries} />; }
