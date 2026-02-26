'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-14 md:ml-[260px]">
        <div className="p-4 md:p-6">
          <PageTransition>
          <h1 className="mb-1 text-xl font-semibold">
            設定
          </h1>
          <p className="mb-6 text-sm text-muted-foreground">
            アカウント情報の確認と設定
          </p>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-base">ユーザー情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-20 text-sm font-medium text-muted-foreground">
                    名前
                  </span>
                  <span className="text-sm">
                    Test User
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-20 text-sm font-medium text-muted-foreground">
                    メール
                  </span>
                  <span className="text-sm">
                    test@example.com
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button variant="destructive" asChild className="bg-transparent border border-destructive text-destructive hover:bg-destructive hover:text-white">
            <Link href="/">
              <LogOut />
              ログアウト
            </Link>
          </Button>
          </PageTransition>
        </div>
      </main>
    </div>
  );
}
