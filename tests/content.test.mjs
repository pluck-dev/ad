import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const data = JSON.parse(await readFile(new URL('../generated/content.json', import.meta.url), 'utf8'));
test('every imported original remains byte-equivalent except normalized newlines', async () => {
  assert.ok(data.documents.length > 0);
  assert.equal(new Set(data.documents.map(d => d.id)).size, data.documents.length);
  for (const doc of data.documents) {
    const original = await readFile(path.resolve(process.env.MARKETING_SOURCE_DIR || 'content/research', doc.source), 'utf8');
    assert.equal(doc.body, original.replace(/\r\n/g, '\n'), doc.source);
    assert.ok(doc.title && doc.minutes > 0);
    assert.ok(!doc.source.includes('.omc'));
  }
});
test('default deployment corpus excludes private client and site audit material', () => {
  if (process.env.MARKETING_SOURCE_DIR) return;
  assert.equal(data.documents.length, 19);
  assert.ok(data.documents.every(d => !d.source.startsWith('clients/')));
  assert.ok(data.documents.every(d => !/^(03_|playbook\/(20_|21_))/.test(d.source)));
  assert.ok(data.documents.every(d => !/바야다|bayada|space\.pluck@gmail\.com/i.test(d.body)));
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
