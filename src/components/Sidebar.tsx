import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-12 w-48 border-r border-gray-300 bg-gray-100 p-4">
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="block border border-gray-300 bg-white p-2 text-sm">
          Dashboard
        </Link>
        <Link href="/settings" className="block border border-gray-300 bg-white p-2 text-sm">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
