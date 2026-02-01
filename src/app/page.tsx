import Header from '@/components/layout/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';
import LogoCloud from '@/components/landing/logo-cloud';
import ProductFeature from '@/components/landing/product-feature';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <ProductFeature />
        <Features />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
