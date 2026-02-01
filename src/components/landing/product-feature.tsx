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
              Reads every bill. Understands what it actually does.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Other tools match keywords. We match impact. The rider amendment buried in a budget bill that kills your business is now front and center.
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
                data-ai-hint={productImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
