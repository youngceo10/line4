import Image from "next/image";

export default function ProductFeature() {

  return (
    <section className="py-20 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-normal font-headline tracking-tight text-card-foreground leading-tight">
              We translate safety jargon into a clear risk signal.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              OpenAI's 'Preparedness Framework,' Anthropic's 'ASLs,' DeepMind's 'CCLs'—they're all different languages for the same critical question: how close are we to the edge? Line⁴ ingests, normalizes, and standardizes these frameworks into one unified view. You don't see their marketing; you see their math.
            </p>
          </div>
          <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1618063280149-c9e9a1178a7c?w=1200&h=900&fit=crop"
                alt="A screenshot of the Line⁴ product showing risk analysis."
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
