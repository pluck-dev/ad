import data from '../generated/content.json';
export type Document = { id: string; title: string; body: string; source: string; group: string; minutes: number; description: string; lesson?: number; exercise?: string; quiz?: { question: string; options: string[]; answer: number; explanation: string } };
export type DocumentSummary = Omit<Document, 'body'>;
export const documents: Document[] = data.documents;
export const lessons: Document[] = data.lessons;
export const allDocuments = [...lessons, ...documents];
export const summaries: DocumentSummary[] = allDocuments.map(({ body, ...rest }) => rest);
export const correction = documents.find(d => d.source.startsWith('playbook/18_'))!;
export function getDocument(id: string) { return allDocuments.find(d => d.id === id); }
