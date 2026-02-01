"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const dashboardImage = PlaceHolderImages.find(p => p.id === 'dashboard-screenshot');

  return (
    <section className="pt-20 md:pt-28 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-card-foreground">
            Stop deciphering legislation.
            <br />
            Start shaping it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            AI agents that monitor, research, and brief you on every threat before you even ask.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
            <Button asChild size="lg" className="w-fit bg-foreground text-background hover:bg-foreground/90 rounded-md px-6">
              <Link href="#">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Backed by</span>
              <div className="flex items-center gap-1.5 font-semibold text-card-foreground">
                <div className="w-5 h-5 bg-[#FF6600] flex items-center justify-center text-white font-bold text-sm rounded-sm">Y</div>
                <span>Combinator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="relative">
          {dashboardImage && (
             <Image
                src={dashboardImage.imageUrl}
                alt={dashboardImage.description}
                width={1200}
                height={750}
                className="rounded-lg shadow-2xl w-full"
                data-ai-hint={dashboardImage.imageHint}
              />
          )}
        </div>
      </div>
    </section>
  );
}
