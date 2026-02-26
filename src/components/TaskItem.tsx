'use client';

import Link from 'next/link';

const statusColors: Record<string, { bg: string; text: string }> = {
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
  const colors = statusColors[status] ?? statusColors['Todo'];

  return (
    <Link
      href={`/task/${id}`}
      className="group block rounded-lg border p-4 transition-all duration-150"
      style={{
        backgroundColor: 'var(--surface-card)',
        borderColor: 'var(--surface-border)',
        boxShadow: 'var(--shadow-sm)',
        opacity: isDone ? 0.7 : 1,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded border"
          style={{
            borderColor: isDone ? '#16a34a' : 'var(--surface-border)',
            backgroundColor: isDone ? '#16a34a' : 'transparent',
          }}
        >
          {isDone && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
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
              <span
                className="rounded px-1.5 py-0.5 text-xs"
                style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--muted-text)' }}
              >
                {tag}
              </span>
            )}
            {dueDate && (
              <span className="text-xs" style={{ color: 'var(--muted-text)' }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-0.5 inline"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {dueDate}
              </span>
            )}
          </div>
        </div>
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          {status}
        </span>
      </div>
    </Link>
  );
}
