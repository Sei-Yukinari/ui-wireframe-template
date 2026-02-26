import Link from 'next/link';

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
        <button
          onClick={onMenuToggle}
          className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
          style={{ color: 'var(--foreground-secondary)' }}
          aria-label="メニューを開く"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
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
