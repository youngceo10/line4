import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Scale } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6 z-50">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Scale className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-xl text-card-foreground">Legislative AI</span>
        </Link>
      </div>

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Book a Demo</Button>
      </div>
    </header>
  );
}
