import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProductFeature() {
  const featureImage = PlaceHolderImages.find(p => p.id === 'product-feature-screenshot');
  return (
    <section className="py-20 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-headline tracking-tight text-card-foreground leading-tight">
                We translate safety jargon into a clear risk signal.
              </h2>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                OpenAI's 'Preparedness Framework,' Anthropic's 'ASLs,' DeepMind's 'CCLs'—they're all different languages for the same critical question: how close are we to the edge? Line⁴ ingests, normalizes, and standardizes these frameworks into one unified view. You don't see their marketing; you see their math.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200} className="flex justify-center">
              <Image
                src={featureImage?.imageUrl || "https://res.cloudinary.com/djrdh7thl/image/upload/v1769959880/Screenshot_2026-02-01_183103_um8fs5.png"}
                alt={featureImage?.description || "A screenshot of the Line⁴ product showing risk analysis."}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
              />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
