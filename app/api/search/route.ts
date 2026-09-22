import { allDocuments } from '@/lib/content';
export const dynamic = 'force-static';
export function GET() {
  return Response.json(allDocuments.map(d => ({ id: d.id, title: d.title, group: d.group, text: d.body.replace(/[#*`>|]/g, '').replace(/\s+/g, ' ') })));
}
