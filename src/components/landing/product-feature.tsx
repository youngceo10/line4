import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ProductFeature() {
  const productImage = PlaceHolderImages.find(p => p.id === 'product-feature-screenshot');

  return (
    <section className="py-20 md:py-24 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-card-foreground leading-tight">
              Reads every eval. Understands what it actually implies.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Other dashboards show you pass rates. We show you risk surface. The subtle jump in deception capabilities buried in a footnote? We flag it. The rapid improvement in agentic coding that bypasses current safeguards? It’s on your dashboard before the press release goes out.
            </p>
          </div>
          <div className="flex justify-center">
            {productImage && (
              <Image
                src={productImage.imageUrl}
                alt={productImage.description}
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
