import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 flex h-20 items-center justify-between bg-background px-4 md:px-8 z-50 border-b">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <div className="font-headline font-bold text-2xl text-card-foreground flex items-center">
          <span>Line</span>
          <sup className="font-bold text-primary text-2xl -top-2 relative ml-0.5">4</sup>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
          <Link href="/dashboard">View Dashboard</Link>
        </Button>
      </div>
    </header>
  );
}
