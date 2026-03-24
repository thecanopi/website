import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-cityscape.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-white leading-tight">
            Strategy for a New Era.
            <span className="block italic text-accent">Precision for Real Impact.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Helping organisations transform faster through the fusion of human insight, analytical rigour, and AI-accelerated execution.
          </p>
          
          {/* Tagline */}
          <p className="text-base md:text-lg text-accent font-medium">
            Where clarity meets action. • Where strategy becomes momentum.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              asChild 
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-medium transition-colors duration-200 rounded-md"
            >
              <Link to="/approach">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}