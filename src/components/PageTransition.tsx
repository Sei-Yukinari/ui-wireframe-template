'use client';

import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`transition-token ${
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-[--distance-y] opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
