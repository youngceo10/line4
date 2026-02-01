export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">We build the radar for the AI that comes next.</h2>
            <p className="mt-6 text-lg text-background/80 leading-relaxed">
              Line4 is built by safety researchers and engineers who know how models scale because we’ve scaled them.
            </p>
            <p className="mt-4 text-lg text-background/80 leading-relaxed">
              We know that by the time a risk is visible in a public deployment, it’s too late to regulate it. We’re deadset on building the telemetry that lets you see the breach coming, so you can spend your time governing the future instead of reacting to the past.
            </p>
            <p className="mt-4 text-lg text-background/80 leading-relaxed">
              Our software monitors the edge of capability, 24/7. We never have to guess if a model is dangerous. We already know, and we’re already watching.
            </p>
        </div>
      </div>
    </footer>
  );
}
