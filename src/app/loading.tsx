export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-200 border-t-transparent" />
        <p className="text-sm font-medium text-muted-foreground">
          読み込み中...
        </p>
      </div>
    </div>
  );
}
