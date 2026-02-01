"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const YCombinatorLogo = () => (
  <div className="flex items-center justify-center bg-orange-500 text-white font-bold w-5 h-5 text-sm">
    Y
  </div>
);

export default function Hero() {
  const dashboardImage = PlaceHolderImages.find(p => p.id === 'dashboard-screenshot');

  return (
    <section className="py-20 md:py-28 text-center bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-card-foreground leading-tight">
            Stop deciphering legislation.
            <br />
            Start shaping it.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            AI agents that monitor, research, and brief you on every threat before you even ask.
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              <Link href="#">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Backed by <YCombinatorLogo /> Combinator
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          {dashboardImage && (
            <Image
              src={dashboardImage.imageUrl}
              alt={dashboardImage.description}
              width={1200}
              height={700}
              className="rounded-lg shadow-2xl mx-auto"
              data-ai-hint={dashboardImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
