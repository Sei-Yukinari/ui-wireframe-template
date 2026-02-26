'use client';

import { useState, useEffect, useCallback } from 'react';

export default function CreateTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [title, setTitle] = useState('');
  const [showError, setShowError] = useState(false);

  const handleClose = useCallback(() => {
    setTitle('');
    setShowError(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleClose]);

  if (!open) return null;

  const handleSave = () => {
    if (!title.trim()) {
      setShowError(true);
      return;
    }
    handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="w-full max-w-[640px] rounded-xl border p-6"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--surface-border)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <h2 className="mb-5 text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
          新しいタスクを作成
        </h2>
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--foreground-secondary)' }}>
            タイトル <span style={{ color: 'var(--danger-500)' }}>*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (showError) setShowError(false);
            }}
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow"
            style={{
              borderColor: showError ? 'var(--danger-500)' : 'var(--surface-border)',
              boxShadow: showError ? '0 0 0 2px var(--danger-bg)' : 'none',
            }}
            onFocus={(e) => {
              if (!showError) {
                e.currentTarget.style.boxShadow = '0 0 0 2px var(--primary-100)';
                e.currentTarget.style.borderColor = 'var(--primary-400)';
              }
            }}
            onBlur={(e) => {
              if (!showError) {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--surface-border)';
              }
            }}
            placeholder="タスクのタイトルを入力"
          />
          {showError && (
            <p className="mt-1 text-xs" style={{ color: 'var(--danger-500)' }}>
              タイトルは必須です
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--foreground-secondary)' }}>
            詳細
          </label>
          <textarea
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow"
            style={{ borderColor: 'var(--surface-border)' }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--primary-100)';
              e.currentTarget.style.borderColor = 'var(--primary-400)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--surface-border)';
            }}
            rows={3}
            placeholder="タスクの詳細を入力"
          />
        </div>
        <div className="mb-6">
          <label className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--foreground-secondary)' }}>
            期限
          </label>
          <input
            type="date"
            className="w-full rounded-lg border px-3 py-2 text-sm outline-none transition-shadow"
            style={{ borderColor: 'var(--surface-border)' }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 2px var(--primary-100)';
              e.currentTarget.style.borderColor = 'var(--primary-400)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--surface-border)';
            }}
          />
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleClose}
            className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
            style={{
              borderColor: 'var(--surface-border)',
              color: 'var(--foreground-secondary)',
              backgroundColor: 'var(--bg-surface)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
            }}
          >
            キャンセル
          </button>
          <button
            onClick={handleSave}
            className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: 'var(--primary-500)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-600)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-500)';
            }}
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
