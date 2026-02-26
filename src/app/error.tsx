'use client';

import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-danger-bg">
        <XCircle className="size-7 text-danger-500" />
      </div>
      <h2 className="text-xl font-semibold">
        エラーが発生しました
      </h2>
      <p className="text-sm text-muted-foreground">
        {error.message}
      </p>
      <Button onClick={reset}>
        再試行
      </Button>
    </div>
  );
}
