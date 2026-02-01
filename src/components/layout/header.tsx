import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Fed10Logo = () => (
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <circle cx="12" cy="12" r="9"  />
            <line x1="4.22" y1="19.78" x2="19.78" y2="4.22" />
        </svg>
    </div>
);

export default function Header() {
  return (
    <header className="sticky top-0 flex h-20 items-center justify-between bg-background px-4 md:px-8 z-50 border-b">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <Fed10Logo />
        <span className="font-headline font-bold text-2xl text-card-foreground">Fed10</span>
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
          <Link href="#">Book a Demo</Link>
        </Button>
      </div>
    </header>
  );
}
