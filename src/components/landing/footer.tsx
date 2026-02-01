import { Button } from "@/components/ui/button";
import Link from "next/link";

const Fed10Logo = () => (
    <div className='transform -rotate-[15deg]'>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <circle cx="12" cy="12" r="9"  />
            <line x1="4.22" y1="19.78" x2="19.78" y2="4.22" />
        </svg>
    </div>
);


export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="flex items-center gap-4">
                <div className="text-7xl md:text-9xl">
                    <Fed10Logo />
                </div>
                <span className="font-headline font-bold text-7xl md:text-9xl tracking-tighter">Fed10</span>
            </div>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 py-7 text-lg shrink-0">
                <Link href="#">Try Fed10 Now</Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
