import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <Button variant="outline" size="sm" asChild>
      <Link href="/dashboard">
        <ArrowLeft />
        戻る
      </Link>
    </Button>
  );
}
