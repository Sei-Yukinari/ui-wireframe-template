import Link from 'next/link';

export default function BackButton() {
  return (
    <Link href="/dashboard" className="inline-block border border-gray-300 bg-gray-200 px-3 py-1 text-sm">
      ← Back
    </Link>
  );
}
