"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'dashboard-screenshot');
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-normal font-headline tracking-tight text-card-foreground leading-tight">
              In the race to AGI, who's watching the red lines?
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
              We turn opaque safety commitments from the world's leading AI labs into a single, transparent dashboard. Line⁴ tracks the capabilities of frontier models against their own safety thresholds—in real-time.
            </p>
          </FadeIn>
          <FadeIn delay={400} className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                <Link href="https://ai-red-line-tracker.streamlit.app/" target="_blank" rel="noopener noreferrer">View Dashboard</Link>
            </Button>
            <div className="flex items-center gap-3 pt-2 sm:pt-2">
               <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769948519/UHxUj0LmVxOq70NyvUz698P5IY_a4ljkt.jpg" alt="Apart Research Logo" className="h-6 sm:h-8" />
               <p className="text-sm text-muted-foreground whitespace-nowrap">An Apart Research sprint project</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={600} className="mt-16 md:mt-24">
            <Image
              src={heroImage?.imageUrl || "https://res.cloudinary.com/djrdh7thl/image/upload/v1769960045/Screenshot_2026-02-01_181339_w2udix.png"}
              alt={heroImage?.description || "A screenshot of the Line⁴ application dashboard."}
              width={1200}
              height={700}
              className="rounded-lg shadow-2xl mx-auto"
              priority
            />
        </FadeIn>
      </div>
    </section>
  );
}
