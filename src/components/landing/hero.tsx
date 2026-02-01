"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-card-foreground leading-tight">
              We build AI to protect businesses from regulatory risk.
            </h1>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                <Link href="#">Learn about Fed10</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 text-muted-foreground md:text-lg pt-2">
            <p>
              Fed10 is built by ex-lobbyists and engineers from Harvard, Amazon,
              Berkeley, Williams, and United Way. We know how policy moves
              because we&apos;ve moved it ourselves.
            </p>
            <p>
              We&apos;re deadset on building software that saves you time, so you can
              spend time shaking hands instead of behind a screen.
            </p>
            <p>
              Our software is capable of much more than tracking. Our software is
              purposely built for you. We&apos;ll gather the necessary information and build
              out features to your request, automating policy consultants in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
