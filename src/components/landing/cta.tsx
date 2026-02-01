import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-card-foreground">
          Ready to Take Control of Your Legislative Risk?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Schedule a demo today and see how Legislative AI can protect your business.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
