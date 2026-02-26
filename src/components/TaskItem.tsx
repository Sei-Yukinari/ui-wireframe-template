'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Check, Calendar } from 'lucide-react';

const statusVariant: Record<string, { bg: string; text: string }> = {
  Todo: { bg: '#f1f5f9', text: '#64748b' },
  'In Progress': { bg: '#dbeafe', text: '#2563eb' },
  Done: { bg: '#dcfce7', text: '#16a34a' },
};

export default function TaskItem({
  id,
  title,
  status,
  dueDate,
  tag,
}: {
  id: string;
  title: string;
  status: string;
  dueDate?: string;
  tag?: string;
}) {
  const isDone = status === 'Done';
  const colors = statusVariant[status] ?? statusVariant['Todo'];

  return (
    <Link href={`/task/${id}`} className="group block">
      <Card
        className="gap-0 p-4 transition-all duration-150 hover:shadow-md hover:-translate-y-px"
        style={{ opacity: isDone ? 0.7 : 1 }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded border"
            style={{
              borderColor: isDone ? '#16a34a' : 'var(--surface-border)',
              backgroundColor: isDone ? '#16a34a' : 'transparent',
            }}
          >
            {isDone && <Check className="size-3 text-white" strokeWidth={3} />}
          </div>
          <div className="min-w-0 flex-1">
            <p
              className={`text-sm font-medium ${isDone ? 'line-through' : ''}`}
              style={{ color: isDone ? 'var(--muted-text)' : 'var(--foreground)' }}
            >
              {title}
            </p>
            <div className="mt-1 flex items-center gap-2">
              {tag && (
                <Badge variant="secondary" className="rounded px-1.5 py-0.5 text-xs">
                  {tag}
                </Badge>
              )}
              {dueDate && (
                <span className="flex items-center gap-0.5 text-xs" style={{ color: 'var(--muted-text)' }}>
                  <Calendar className="size-3" />
                  {dueDate}
                </span>
              )}
            </div>
          </div>
          <Badge
            className="shrink-0"
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {status}
          </Badge>
        </div>
      </Card>
    </Link>
  );
}
