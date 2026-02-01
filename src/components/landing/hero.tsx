"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-card-foreground">
          Monitor Legislative Threats with AI
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          Our platform helps you stay ahead of regulatory changes, understand policy exposure, and protect your business from legislative risks.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#">Book a Demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
