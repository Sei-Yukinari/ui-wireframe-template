'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BackButton from '@/components/BackButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

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
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-start justify-between">
                <h1 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                  {task.title}
                </h1>
                <Badge
                  className="shrink-0"
                  style={{ backgroundColor: colors.bg, color: colors.text }}
                >
                  {task.status}
                </Badge>
              </div>
              <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                {task.description}
              </p>
              <div
                className="flex flex-wrap gap-4 border-t pt-4"
                style={{ borderColor: 'var(--surface-border)' }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" style={{ color: 'var(--muted-text)' }} />
                  <span className="text-sm" style={{ color: 'var(--muted-text)' }}>
                    期限: {task.dueDate}
                  </span>
                </div>
                {task.tag && (
                  <Badge variant="secondary">
                    {task.tag}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
