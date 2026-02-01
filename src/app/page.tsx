import Header from '@/components/layout/header';
import Hero from '@/components/landing/hero';
import Process from '@/components/landing/process';
import Footer from '@/components/landing/footer';
import ProductFeature from '@/components/landing/product-feature';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductFeature />
        <Process />
      </main>
      <Footer />
    </div>
  );
}
