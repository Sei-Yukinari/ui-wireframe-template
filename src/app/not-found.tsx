import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <span className="text-3xl font-bold text-muted-foreground">
          404
        </span>
      </div>
      <p className="text-base font-medium text-foreground-secondary">
        ページが見つかりませんでした
      </p>
      <Button asChild>
        <Link href="/">トップページへ戻る</Link>
      </Button>
    </div>
  );
}
