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
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-normal font-headline text-card-foreground leading-tight">
                The Watchtower for Frontier AI
              </h2>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                As development accelerates, the gap between promise and reality can be disastrous. Line⁴ acts as a global watchtower, providing an unbiased, data-driven view of frontier model capabilities. We don't just report the news when a red line is crossed—we show you the curve, so you can see it coming.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
