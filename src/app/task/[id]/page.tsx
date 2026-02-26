import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import BackButton from '@/components/BackButton';

const tasks: Record<string, { title: string; description: string; status: string }> = {
  '1': {
    title: 'プロジェクト計画を作成する',
    description: 'プロジェクトの目標、スコープ、スケジュールを定義する。',
    status: 'In Progress',
  },
  '2': {
    title: 'デザインレビューを実施する',
    description: 'UIデザインのレビューを行い、フィードバックをまとめる。',
    status: 'Todo',
  },
  '3': {
    title: 'テストケースを作成する',
    description: '主要機能のテストケースを作成し、テスト計画を策定する。',
    status: 'Done',
  },
  '4': {
    title: 'ドキュメントを更新する',
    description: 'プロジェクトのドキュメントを最新の状態に更新する。',
    status: 'Todo',
  },
};

export function generateStaticParams() {
  return Object.keys(tasks).map((id) => ({ id }));
}

export default async function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const task = tasks[id] ?? { title: 'Unknown Task', description: '', status: 'Unknown' };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <main className="ml-48 p-6 pt-12">
        <div className="mb-4">
          <BackButton />
        </div>
        <h1 className="mb-2 text-lg font-bold">{task.title}</h1>
        <p className="mb-4 text-sm">{task.description}</p>
        <div className="border border-gray-300 bg-white p-3">
          <span className="text-sm font-bold">Status: </span>
          <span className="text-sm">{task.status}</span>
        </div>
      </main>
    </div>
  );
}
