import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full"
        style={{ backgroundColor: 'var(--bg-muted)' }}
      >
        <span className="text-3xl font-bold" style={{ color: 'var(--muted-text)' }}>
          404
        </span>
      </div>
      <p className="text-base font-medium" style={{ color: 'var(--foreground-secondary)' }}>
        ページが見つかりませんでした
      </p>
      <Link
        href="/"
        className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
        style={{ backgroundColor: 'var(--primary-500)' }}
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
