"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const dashboardImage = PlaceHolderImages.find(p => p.id === 'dashboard-screenshot');

  return (
    <section className="py-20 md:py-28 text-center bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-card-foreground leading-tight">
            The red line isn't a metaphor.
            <br />
            It’s a metric.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Real-time surveillance of the 4 critical thresholds that define catastrophic risk. We turn abstract safety commitments into hard operational data.
          </p>
          <div className="mt-8 flex justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              <Link href="#">
                Get Access
              </Link>
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Backed by Your Org/Grant
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
