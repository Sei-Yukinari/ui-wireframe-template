import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">404</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">ページが見つかりませんでした</p>
      <Link href="/" className="text-blue-600 underline hover:text-blue-800">
        トップページへ戻る
      </Link>
    </div>
  );
}
