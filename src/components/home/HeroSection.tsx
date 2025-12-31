import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-teal-mid/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight">
            Strategy for a New Era.{' '}
            <span className="text-accent">Precision for Real Impact.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Helping organisations transform faster through the fusion of human insight, 
            analytical rigour, and AI-accelerated execution.
          </p>
          
          {/* Taglines */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white/65 pt-2">
            <span className="text-base">Where clarity meets action.</span>
            <span className="hidden sm:block text-accent">•</span>
            <span className="text-base">Where strategy becomes momentum.</span>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              asChild 
              className="bg-accent text-accent-foreground hover:bg-gold-light px-8 py-6 text-base font-medium transition-colors duration-200"
            >
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}