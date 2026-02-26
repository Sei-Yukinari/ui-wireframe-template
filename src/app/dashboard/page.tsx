'use client';

import { useState } from 'react';
import TaskList from '@/components/TaskList';
import CreateTaskModal from '@/components/CreateTaskModal';

export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <h1 className="mb-4 text-lg font-bold">Dashboard</h1>
      <TaskList />
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setModalOpen(true)}
          className="border border-gray-400 bg-gray-200 px-4 py-2 text-sm font-bold"
        >
          + Add Task
        </button>
      </div>
      <CreateTaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
