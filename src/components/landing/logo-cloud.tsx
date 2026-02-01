import { FadeIn } from "@/components/ui/fade-in";

export default function LogoCloud() {
  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-center sm:text-left text-lg font-normal leading-8 text-muted-foreground">
            Tracking the leading AI labs
          </h2>
        </FadeIn>
        <FadeIn delay={200} className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-x-12 sm:gap-x-16 gap-y-8">
          <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769956044/Symbol_q6jbn3.png" alt="OpenAI Logo" className="h-10 sm:h-12" />
          <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769956043/Symbol_1_b9tci1.png" alt="Anthropic Logo" className="h-9 sm:h-11" />
          <img src="https://res.cloudinary.com/djrdh7thl/image/upload/v1769947962/DeepMind_idlHaUh9oK_1_kb4fr4.png" alt="DeepMind Logo" className="h-10 sm:h-12" />
        </FadeIn>
      </div>
    </div>
  )
}
