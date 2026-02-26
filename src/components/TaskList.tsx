import TaskItem from './TaskItem';

const tasks = [
  { id: '1', title: 'プロジェクト計画を作成する', status: 'In Progress' },
  { id: '2', title: 'デザインレビューを実施する', status: 'Todo' },
  { id: '3', title: 'テストケースを作成する', status: 'Done' },
  { id: '4', title: 'ドキュメントを更新する', status: 'Todo' },
];

export default function TaskList() {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} title={task.title} status={task.status} />
      ))}
    </div>
  );
}
