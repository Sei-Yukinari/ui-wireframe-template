import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm border border-gray-300 bg-white p-8">
        <h1 className="mb-6 text-center text-xl font-bold">Login</h1>
        <div className="mb-4">
          <label className="mb-1 block text-sm">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 text-sm"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="mb-1 block text-sm">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 text-sm"
            placeholder="password"
          />
        </div>
        <Link
          href="/dashboard"
          className="block w-full border border-gray-400 bg-gray-200 p-2 text-center text-sm font-bold"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
