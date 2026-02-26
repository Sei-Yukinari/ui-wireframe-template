import Link from 'next/link';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <main className="ml-48 p-6 pt-12">
        <h1 className="mb-4 text-lg font-bold">Settings</h1>
        <div className="mb-6 border border-gray-300 bg-white p-4">
          <h2 className="mb-2 text-sm font-bold">User Info</h2>
          <p className="text-sm">Name: Test User</p>
          <p className="text-sm">Email: test@example.com</p>
        </div>
        <Link href="/" className="border border-gray-400 bg-gray-200 px-4 py-2 text-sm font-bold">
          Logout
        </Link>
      </main>
    </div>
  );
}
