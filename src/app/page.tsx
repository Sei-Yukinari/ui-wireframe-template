'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: 'var(--bg-default)' }}
    >
      <div
        className="w-full max-w-sm rounded-xl border p-8"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--surface-border)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div className="mb-6 flex flex-col items-center">
          <div
            className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
            style={{ backgroundColor: 'var(--primary-500)' }}
          >
            T
          </div>
          <h1 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
            TODO App にログイン
          </h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--muted-text)' }}>
            アカウントにサインインしてください
          </p>
        </div>
        <div className="mb-4">
          <label
            className="mb-1.5 block text-sm font-medium"
            style={{ color: 'var(--foreground-secondary)' }}
          >
            メールアドレス
          </label>
          <input
            type="email"
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
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-1.5 block text-sm font-medium"
            style={{ color: 'var(--foreground-secondary)' }}
          >
            パスワード
          </label>
          <input
            type="password"
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
            placeholder="パスワードを入力"
          />
        </div>
        <Link
          href="/dashboard"
          className="block w-full rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white transition-colors"
          style={{ backgroundColor: 'var(--primary-500)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-600)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-500)';
          }}
        >
          ログイン
        </Link>
      </div>
    </div>
  );
}
