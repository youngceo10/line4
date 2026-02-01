import { Scale } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-xl text-card-foreground">Legislative AI</span>
          </div>
          <nav className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            © Legislative AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
