import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const data = JSON.parse(await readFile(new URL('../generated/content.json', import.meta.url), 'utf8'));
test('every imported original remains byte-equivalent except normalized newlines', async () => {
  assert.equal(data.documents.length, 40);
  assert.equal(new Set(data.documents.map(d => d.id)).size, 40);
  for (const doc of data.documents) {
    const original = await readFile(path.resolve(process.env.MARKETING_SOURCE_DIR || '../ad-agency-research', doc.source), 'utf8');
    assert.equal(doc.body, original.replace(/\r\n/g, '\n'), doc.source);
    assert.ok(doc.title && doc.minutes > 0);
    assert.ok(!doc.source.includes('.omc'));
  }
});
test('eight lessons preserve master excerpts and have answerable quizzes', () => {
  const master = data.documents.find(d => d.source.startsWith('00_MASTER'));
  assert.equal(data.lessons.length, 8);
  for (const [index, lesson] of data.lessons.entries()) {
    assert.equal(lesson.id, `lesson-${index + 1}`);
    assert.ok(master.body.includes(lesson.body));
    assert.ok(lesson.body.length > 100);
    assert.ok(lesson.exercise.length > 10);
    assert.ok(lesson.quiz.options[lesson.quiz.answer]);
  }
  assert.ok(data.documents.some(d => d.source.startsWith('playbook/18_')));
});
