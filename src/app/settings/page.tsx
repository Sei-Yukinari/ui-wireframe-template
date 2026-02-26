'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-default)' }}>
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-14 md:ml-[260px]">
        <div className="p-4 md:p-6">
          <h1 className="mb-1 text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
            設定
          </h1>
          <p className="mb-6 text-sm" style={{ color: 'var(--muted-text)' }}>
            アカウント情報の確認と設定
          </p>
          <div
            className="mb-6 rounded-lg border p-5"
            style={{
              backgroundColor: 'var(--surface-card)',
              borderColor: 'var(--surface-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <h2 className="mb-4 text-base font-semibold" style={{ color: 'var(--foreground)' }}>
              ユーザー情報
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-20 text-sm font-medium" style={{ color: 'var(--muted-text)' }}>
                  名前
                </span>
                <span className="text-sm" style={{ color: 'var(--foreground)' }}>
                  Test User
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-20 text-sm font-medium" style={{ color: 'var(--muted-text)' }}>
                  メール
                </span>
                <span className="text-sm" style={{ color: 'var(--foreground)' }}>
                  test@example.com
                </span>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
            style={{
              borderColor: 'var(--danger-500)',
              color: 'var(--danger-500)',
              backgroundColor: 'var(--bg-surface)',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            ログアウト
          </Link>
        </div>
      </main>
    </div>
  );
}
