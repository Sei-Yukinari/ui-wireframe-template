'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-red-600">エラーが発生しました</h2>
      <p className="text-gray-600 dark:text-gray-400">{error.message}</p>
      <button
        onClick={reset}
        className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
      >
        再試行
      </button>
    </div>
  );
}
