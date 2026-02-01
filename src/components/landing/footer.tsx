import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Footer() {
  const projectIcon = PlaceHolderImages.find(p => p.id === 'project-icon');

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            {projectIcon && <Image src={projectIcon.imageUrl} alt={projectIcon.description} width={64} height={64} className="h-12 w-12 md:h-16 md:w-16"/>}
            <div className="font-headline font-bold text-5xl md:text-7xl text-background flex items-center">
               <span>Line</span>
               <sup className="font-bold text-primary text-5xl md:text-7xl -top-3 md:-top-5 relative ml-1">4</sup>
            </div>
          </div>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-full px-8">
            <Link href="https://ai-red-line-tracker.streamlit.app/" target="_blank" rel="noopener noreferrer">View Dashboard</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
