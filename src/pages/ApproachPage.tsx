import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PageTransition } from '@/components/shared/PageTransition';
import { OrbitSection } from '@/components/approach/OrbitSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ApproachPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <RevealOnScroll>
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">Our Methodology</p>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  How We Work
                </h1>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={200}>
                <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                  Organisations change when strategy and execution move together. Our approach ensures both.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Orbit Steps Section */}
        <OrbitSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Ready to Start?</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                  Let's transform your business together
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're facing complex challenges or seeking new opportunities, 
                  our proven methodology delivers results.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}