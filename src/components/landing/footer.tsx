import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="font-headline font-bold text-5xl md:text-7xl text-background flex items-center">
             <span>Line</span>
             <sup className="font-bold text-primary text-5xl md:text-7xl -top-3 md:-top-5 relative ml-1">4</sup>
          </div>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full px-8">
            <Link href="#">Get Access</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
