'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BackButton from '@/components/BackButton';

const statusColors: Record<string, { bg: string; text: string }> = {
  Todo: { bg: '#f1f5f9', text: '#64748b' },
  'In Progress': { bg: '#dbeafe', text: '#2563eb' },
  Done: { bg: '#dcfce7', text: '#16a34a' },
};

export default function TaskDetailClient({
  task,
}: {
  task: { title: string; description: string; status: string; dueDate: string; tag: string };
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const colors = statusColors[task.status] ?? statusColors['Todo'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-default)' }}>
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-14 md:ml-[260px]">
        <div className="p-4 md:p-6">
          <div className="mb-4">
            <BackButton />
          </div>
          <div
            className="rounded-lg border p-6"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--surface-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="mb-4 flex items-start justify-between">
              <h1 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                {task.title}
              </h1>
              <span
                className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {task.status}
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
              {task.description}
            </p>
            <div
              className="flex flex-wrap gap-4 border-t pt-4"
              style={{ borderColor: 'var(--surface-border)' }}
            >
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: 'var(--muted-text)' }}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-sm" style={{ color: 'var(--muted-text)' }}>
                  期限: {task.dueDate}
                </span>
              </div>
              {task.tag && (
                <span
                  className="rounded px-2 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: 'var(--bg-muted)', color: 'var(--muted-text)' }}
                >
                  {task.tag}
                </span>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
