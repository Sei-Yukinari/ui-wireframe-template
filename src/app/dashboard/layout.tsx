import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <main className="ml-48 pt-12 p-6">{children}</main>
    </div>
  );
}
