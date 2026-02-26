'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

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
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-base">ユーザー情報</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
          <Button variant="outline" asChild className="border-[var(--danger-500)] text-[var(--danger-500)]">
            <Link href="/">
              <LogOut />
              ログアウト
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
