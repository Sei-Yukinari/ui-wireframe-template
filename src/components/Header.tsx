import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function Header({ onMenuToggle }: { onMenuToggle?: () => void }) {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-10 flex h-14 items-center justify-between border-b px-4 md:px-6"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--surface-border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="md:hidden"
          aria-label="メニューを開く"
        >
          <Menu className="size-5" />
        </Button>
        <Link href="/dashboard" className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{ backgroundColor: 'var(--primary-500)' }}
          >
            T
          </div>
          <span className="text-base font-semibold" style={{ color: 'var(--foreground)' }}>
            TODO App
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: 'var(--secondary-500)' }}
        >
          TU
        </div>
      </div>
    </header>
  );
}
