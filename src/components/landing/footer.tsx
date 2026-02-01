import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="font-headline font-bold text-5xl md:text-7xl text-background">
            Line4
          </span>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full px-8">
            <Link href="#">Get Access</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
