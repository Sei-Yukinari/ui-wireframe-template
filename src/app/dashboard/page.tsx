'use client';

import { useState } from 'react';
import TaskList from '@/components/TaskList';
import CreateTaskModal from '@/components/CreateTaskModal';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import PageTransition from '@/components/PageTransition';

export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageTransition>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            タスクを管理しましょう
          </p>
        </div>
        <Button onClick={() => setModalOpen(true)}>
          <Plus />
          タスクを追加
        </Button>
      </div>
      <TaskList />
      <CreateTaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </PageTransition>
  );
}
