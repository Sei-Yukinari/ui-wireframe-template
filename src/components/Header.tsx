import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex h-12 items-center border-b border-gray-300 bg-white px-4">
      <Link href="/dashboard" className="text-base font-bold">
        TODO App
      </Link>
    </header>
  );
}
