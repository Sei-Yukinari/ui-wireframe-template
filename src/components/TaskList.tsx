'use client';

import { useState } from 'react';
import TaskItem from './TaskItem';

const tasks = [
  {
    id: '1',
    title: 'プロジェクト計画を作成する',
    status: 'In Progress',
    dueDate: '2026-03-01',
    tag: '計画',
  },
  {
    id: '2',
    title: 'デザインレビューを実施する',
    status: 'Todo',
    dueDate: '2026-03-05',
    tag: 'デザイン',
  },
  {
    id: '3',
    title: 'テストケースを作成する',
    status: 'Done',
    dueDate: '2026-02-28',
    tag: 'テスト',
  },
  {
    id: '4',
    title: 'ドキュメントを更新する',
    status: 'Todo',
    dueDate: '2026-03-10',
    tag: 'ドキュメント',
  },
];

const filters = ['All', 'Todo', 'In Progress', 'Done'] as const;

export default function TaskList() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredTasks =
    activeFilter === 'All' ? tasks : tasks.filter((t) => t.status === activeFilter);

  return (
    <div>
      <div className="mb-4 flex gap-1 rounded-lg p-1" style={{ backgroundColor: 'var(--bg-muted)' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="rounded-md px-3 py-1.5 text-xs font-medium transition-colors"
            style={{
              backgroundColor: activeFilter === filter ? 'var(--bg-surface)' : 'transparent',
              color: activeFilter === filter ? 'var(--primary-600)' : 'var(--muted-text)',
              boxShadow: activeFilter === filter ? 'var(--shadow-sm)' : 'none',
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      {filteredTasks.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-12"
          style={{ borderColor: 'var(--surface-border)', color: 'var(--muted-text)' }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-3 opacity-50"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          <p className="text-sm font-medium">タスクがありません</p>
          <p className="mt-1 text-xs">＋タスクを追加してみましょう</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              status={task.status}
              dueDate={task.dueDate}
              tag={task.tag}
            />
          ))}
        </div>
      )}
    </div>
  );
}
