'use client';

import { useState } from 'react';
import TaskItem from './TaskItem';
import { Button } from '@/components/ui/button';
import { FilePlus } from 'lucide-react';

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
          <Button
            key={filter}
            variant={activeFilter === filter ? 'secondary' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter(filter)}
            className="text-xs"
            style={{
              backgroundColor: activeFilter === filter ? 'var(--bg-surface)' : 'transparent',
              color: activeFilter === filter ? 'var(--primary-600)' : 'var(--muted-text)',
              boxShadow: activeFilter === filter ? 'var(--shadow-sm)' : 'none',
            }}
          >
            {filter}
          </Button>
        ))}
      </div>
      {filteredTasks.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-12"
          style={{ borderColor: 'var(--surface-border)', color: 'var(--muted-text)' }}
        >
          <FilePlus className="mb-3 size-10 opacity-50" strokeWidth={1.5} />
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
