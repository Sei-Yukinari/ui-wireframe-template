'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-sm shadow-token-lg">
        <CardContent className="p-8">
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-lg font-bold text-white">
              T
            </div>
            <h1 className="text-xl font-semibold">
              TODO App にログイン
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              アカウントにサインインしてください
            </p>
          </div>
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
              メールアドレス
            </label>
            <Input type="email" placeholder="email@example.com" />
          </div>
          <div className="mb-6">
            <label className="mb-1.5 block text-sm font-medium text-muted-foreground">
              パスワード
            </label>
            <Input type="password" placeholder="パスワードを入力" />
          </div>
          <Button asChild className="w-full">
            <Link href="/dashboard">ログイン</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
