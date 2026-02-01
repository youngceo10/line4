import Header from '@/components/layout/header';
import Hero from '@/components/landing/hero';
import Process from '@/components/landing/process';
import Footer from '@/components/landing/footer';
import ProductFeature from '@/components/landing/product-feature';
import LogoCloud from '@/components/landing/logo-cloud';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <ProductFeature />
        <Process />
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-normal font-headline text-card-foreground leading-tight">
                In the race to AGI, who's watching the red lines?
              </h2>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                We turn opaque safety commitments from the world's leading AI labs into a single, transparent dashboard. Line⁴ tracks the capabilities of frontier models against their own safety thresholds—in real-time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
