import Link from 'next/link';

export default function TaskItem({
  id,
  title,
  status,
}: {
  id: string;
  title: string;
  status: string;
}) {
  return (
    <Link href={`/task/${id}`} className="block border border-gray-300 bg-white p-3">
      <div className="flex items-center justify-between">
        <span className="text-sm">{title}</span>
        <span className="text-sm text-gray-500">[{status}]</span>
      </div>
    </Link>
  );
}
