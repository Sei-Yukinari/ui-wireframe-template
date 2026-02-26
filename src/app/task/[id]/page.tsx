import TaskDetailClient from './TaskDetailClient';

const tasks: Record<string, { title: string; description: string; status: string; dueDate: string; tag: string }> = {
  '1': {
    title: 'プロジェクト計画を作成する',
    description: 'プロジェクトの目標、スコープ、スケジュールを定義する。',
    status: 'In Progress',
    dueDate: '2026-03-01',
    tag: '計画',
  },
  '2': {
    title: 'デザインレビューを実施する',
    description: 'UIデザインのレビューを行い、フィードバックをまとめる。',
    status: 'Todo',
    dueDate: '2026-03-05',
    tag: 'デザイン',
  },
  '3': {
    title: 'テストケースを作成する',
    description: '主要機能のテストケースを作成し、テスト計画を策定する。',
    status: 'Done',
    dueDate: '2026-02-28',
    tag: 'テスト',
  },
  '4': {
    title: 'ドキュメントを更新する',
    description: 'プロジェクトのドキュメントを最新の状態に更新する。',
    status: 'Todo',
    dueDate: '2026-03-10',
    tag: 'ドキュメント',
  },
};

export function generateStaticParams() {
  return Object.keys(tasks).map((id) => ({ id }));
}

export default async function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const task = tasks[id] ?? {
    title: 'Unknown Task',
    description: '',
    status: 'Unknown',
    dueDate: '',
    tag: '',
  };

  return <TaskDetailClient task={task} />;
}
