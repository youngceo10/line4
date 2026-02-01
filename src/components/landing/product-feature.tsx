import Image from "next/image";

export default function ProductFeature() {

  return (
    <section className="py-20 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-normal font-headline tracking-tight text-card-foreground leading-tight">
              Reads every eval. Understands what it actually implies.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Other dashboards show you pass rates. We show you risk surface. The subtle jump in deception capabilities buried in a footnote? We flag it. The rapid improvement in agentic coding that bypasses current safeguards? It’s on your dashboard before the press release goes out.
            </p>
          </div>
          <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1618063280149-c9e9a1178a7c?w=1200&h=900&fit=crop"
                alt="A screenshot of the Line4 product showing risk analysis."
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
