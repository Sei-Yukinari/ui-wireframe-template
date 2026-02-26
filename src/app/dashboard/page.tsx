'use client';

import { useState } from 'react';
import TaskList from '@/components/TaskList';
import CreateTaskModal from '@/components/CreateTaskModal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
            Dashboard
          </h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--muted-text)' }}>
            タスクを管理しましょう
          </p>
        </div>
        <Button
          onClick={() => setModalOpen(true)}
          style={{ backgroundColor: 'var(--primary-500)' }}
          className="text-white hover:opacity-90"
        >
          <Plus />
          タスクを追加
        </Button>
      </div>
      <TaskList />
      <CreateTaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
