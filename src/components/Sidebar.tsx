'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Settings } from 'lucide-react';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: <LayoutGrid className="size-[18px]" /> },
  { href: '/settings', label: 'Settings', icon: <Settings className="size-[18px]" /> },
];

export default function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed bottom-0 left-0 top-14 z-30 w-[260px] border-r border-surface-border bg-bg-muted p-4 transition-transform duration-200 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-bg-surface text-primary-600 shadow-token-sm'
                    : 'text-foreground-secondary hover:bg-surface-hover'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
