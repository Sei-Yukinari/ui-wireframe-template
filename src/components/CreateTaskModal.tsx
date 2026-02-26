'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function CreateTaskModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [title, setTitle] = useState('');
  const [showError, setShowError] = useState(false);

  const handleClose = () => {
    setTitle('');
    setShowError(false);
    onClose();
  };

  const handleSave = () => {
    if (!title.trim()) {
      setShowError(true);
      return;
    }
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>新しいタスクを作成</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
              タイトル <span className="text-destructive">*</span>
            </label>
            <Input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (showError) setShowError(false);
              }}
              aria-invalid={showError}
              placeholder="タスクのタイトルを入力"
            />
            {showError && (
              <p className="mt-1 text-xs text-destructive">
                タイトルは必須です
              </p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
              詳細
            </label>
            <Textarea rows={3} placeholder="タスクの詳細を入力" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
              期限
            </label>
            <Input type="date" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            キャンセル
          </Button>
          <Button onClick={handleSave}>
            保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
