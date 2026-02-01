import Header from '@/components/layout/header';
import Hero from '@/components/landing/hero';
import Process from '@/components/landing/process';
import Footer from '@/components/landing/footer';
import ProductFeature from '@/components/landing/product-feature';
import LogoCloud from '@/components/landing/logo-cloud';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <ProductFeature />
        <Process />
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 flex justify-center">
            <Image
              src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769960012/Screenshot_2026-02-01_181203_geq39b.png"
              alt="Line⁴ Risk Categories"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </section>
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
