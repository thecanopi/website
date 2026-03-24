import { SectionHeading } from '@/components/shared/SectionHeading';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Transform. Innovate. Accelerate."
          subtitle="We partner with organisations to unlock growth, redesign operations, elevate leadership, and build future-ready capabilities."
          dark
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <RevealOnScroll delayMs={0}>
              <div className="space-y-3">
                <div className="text-4xl font-serif text-accent">01</div>
                <h3 className="text-lg font-semibold">Transform</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Reimagine your business model and operating approach
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delayMs={100}>
              <div className="space-y-3">
                <div className="text-4xl font-serif text-accent">02</div>
                <h3 className="text-lg font-semibold">Innovate</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Leverage AI and digital tools for competitive advantage
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delayMs={200}>
              <div className="space-y-3">
                <div className="text-4xl font-serif text-accent">03</div>
                <h3 className="text-lg font-semibold">Accelerate</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Move faster from strategy to measurable results
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}