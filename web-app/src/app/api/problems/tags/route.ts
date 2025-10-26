import { NextResponse } from 'next/server';

const availableTags = [
  'array',
  'string',
  'hash-table',
  'linked-list',
  'tree',
  'graph',
  'dynamic-programming',
  'greedy',
  'sorting',
  'searching',
  'binary-search',
  'divide-and-conquer',
  'backtracking',
  'stack',
  'queue',
  'heap',
  'sliding-window',
  'two-pointers',
  'math',
  'recursion',
  'bit-manipulation',
  'trie',
  'union-find',
  'topological-sort',
  'minimum-spanning-tree',
  'shortest-path',
  'geometry',
  'simulation',
  'design',
  'database',
  'shell',
  'concurrency',
];

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    data: availableTags 
  });
}
