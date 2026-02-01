"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold font-headline tracking-tight text-card-foreground leading-tight">
            The red line isn't a metaphor.
            <br />
            It’s a metric.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Real-time surveillance of the 4 critical thresholds that define catastrophic risk. We turn abstract safety commitments into hard operational data.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-6">
              <Link href="/">
                Get Access
              </Link>
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L61.2257 34.5491L97.5528 24.4717L75.5283 50L97.5528 75.5283L61.2257 65.4509L50 100L38.7743 65.4509L2.44717 75.5283L24.4717 50L2.44717 24.4717L38.7743 34.5491L50 0Z" fill="#63FF9C"/>
              </svg>
              An Apart Research sprint project
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
            <Image
              src="https://images.unsplash.com/photo-1622816188655-9e99d5197616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkYXNoYm9hcmQlMjB1aXxlbnwwfHx8fDE3Njk5MDUxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="A screenshot of the Line4 application dashboard."
              width={1200}
              height={700}
              className="rounded-lg shadow-2xl mx-auto"
              priority
            />
        </div>
      </div>
    </section>
  );
}
