'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full"
        style={{ backgroundColor: 'var(--danger-bg)' }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: 'var(--danger-500)' }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
        エラーが発生しました
      </h2>
      <p className="text-sm" style={{ color: 'var(--muted-text)' }}>
        {error.message}
      </p>
      <button
        onClick={reset}
        className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
        style={{ backgroundColor: 'var(--primary-500)' }}
      >
        再試行
      </button>
    </div>
  );
}
