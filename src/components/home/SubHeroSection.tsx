import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

export function SubHeroSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <RevealOnScroll>
            <p className="text-xl md:text-2xl text-foreground font-serif leading-relaxed">
              You don't need more slides. You need partners who solve problems with you — 
              and move just as fast as your business demands.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100}>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring structured thinking, digital fluency, and execution agility to help 
              leaders solve their toughest challenges and seize their biggest opportunities.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}