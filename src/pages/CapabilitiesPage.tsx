import { useState } from 'react';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PageTransition } from '@/components/shared/PageTransition';
import { TrendingUp, Megaphone, Brain, Settings, Users, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import pageBg from '@/assets/page-bg-abstract.jpg';

const capabilities = [
  {
    title: 'Corporate and Business Strategy',
    shortTitle: 'Business Strategy',
    icon: TrendingUp,
    color: 'from-purple-600 to-purple-500',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    items: [
      'Growth and diversification strategy',
      'Operating model redesign',
      'Market entry and expansion strategy',
      'Enterprise transformation roadmaps',
    ],
  },
  {
    title: 'Branding and Marketing',
    shortTitle: 'Branding',
    icon: Megaphone,
    color: 'from-amber-500 to-amber-400',
    borderColor: 'border-amber-500',
    textColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    items: [
      'Brand architecture and positioning',
      'Brand identity development and refresh',
      'Marketing strategy and planning',
      'Customer segmentation and value proposition',
      'Go-to-market strategy and activation',
      'Marketing performance measurement',
    ],
  },
  {
    title: 'Digital, Data and AI Strategy',
    shortTitle: 'Digital & AI',
    icon: Brain,
    color: 'from-cyan-600 to-cyan-500',
    borderColor: 'border-cyan-500',
    textColor: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    items: [
      'Digital transformation strategy',
      'AI readiness assessment and roadmap',
      'Business model innovation',
      'Data governance and operating standards',
      'Generative AI use case design',
    ],
  },
  {
    title: 'Operations and Performance',
    shortTitle: 'Operations',
    icon: Settings,
    color: 'from-emerald-600 to-emerald-500',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    items: [
      'Cost transformation',
      'Supply chain optimisation',
      'Lean and agile operations',
      'Process excellence',
    ],
  },
  {
    title: 'Customer and Growth Strategy',
    shortTitle: 'Growth Strategy',
    icon: Users,
    color: 'from-rose-600 to-rose-500',
    borderColor: 'border-rose-500',
    textColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    items: [
      'Go-to-market design',
      'Pricing optimisation',
      'Brand and experience transformation',
      'Marketing effectiveness',
      'Customer analytics and segmentation',
    ],
  },
  {
    title: 'Leadership and Personal Branding',
    shortTitle: 'Leadership',
    icon: Lightbulb,
    color: 'from-orange-600 to-orange-500',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    items: [
      'Executive narrative and positioning',
      'Leadership communication strategy',
      'Thought leadership blueprinting',
      'Digital presence management',
      'Reputation and visibility strategy',
    ],
  },
  {
    title: 'Innovation and Venture Advisory',
    shortTitle: 'Innovation',
    icon: Rocket,
    color: 'from-indigo-600 to-indigo-500',
    borderColor: 'border-indigo-500',
    textColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    items: [
      'Venture creation and scaling',
      'Corporate venture strategy',
      'Startup partnership ecosystems',
      'Product strategy and experimentation',
    ],
  },
];

interface FlipCardProps {
  capability: typeof capabilities[0];
  index: number;
}

const FlipCard = ({ capability, index }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = capability.icon;

  const handleFlip = (newState: boolean) => {
    if (newState !== isFlipped) {
      setIsFlipped(newState);
    }
  };

  const handleClick = () => {
    handleFlip(!isFlipped);
  };

  return (
    <div
      className="flip-card-container h-[320px] md:h-[360px] cursor-pointer"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => handleFlip(true)}
      onMouseLeave={() => handleFlip(false)}
      onClick={handleClick}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Face */}
        <div className={`flip-card-front rounded-2xl bg-gradient-to-br ${capability.color} p-6 flex flex-col items-center justify-center text-white shadow-lg`}>
          {/* Icon container */}
          <div className="mb-6">
            <div className="w-20 h-20 rounded-xl bg-white/15 flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Short Title */}
          <h3 className="text-2xl md:text-2xl font-serif font-bold text-center leading-tight px-2">
            {capability.shortTitle}
          </h3>


          {/* Number badge */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Back Face */}
        <div className={`flip-card-back rounded-2xl bg-card border-2 ${capability.borderColor} p-6 flex flex-col overflow-hidden shadow-lg`}>
          {/* Top accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.color}`} />
          
          {/* Title with icon */}
          <div className="flex items-center gap-3 mb-4 pt-2">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${capability.color} flex items-center justify-center`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className={`text-base md:text-lg font-bold ${capability.textColor} leading-tight flex-1`}>
              {capability.title}
            </h3>
          </div>

          {/* Items list */}
          <ul className="space-y-2.5 flex-1 overflow-y-auto">
            {capability.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start gap-2.5 text-sm text-foreground/80"
              >
                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${capability.color} flex-shrink-0`} />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default function CapabilitiesPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 text-white overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pageBg})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <RevealOnScroll>
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">What We Do</p>
              </RevealOnScroll>
              <RevealOnScroll delayMs={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  Our Capabilities
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delayMs={200}>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  A complete set of services to help organisations transform 
                  and grow with purpose. Hover or tap to explore each capability.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Flip Cards Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {capabilities.map((capability, index) => (
                <FlipCard key={index} capability={capability} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how our capabilities can drive your growth and success.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </RevealOnScroll>
          </div>
        </section>
      </div>

      {/* Clean CSS for flip cards */}
      <style>{`
        .flip-card-container {
          perspective: 1000px;
          animation: cardFadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
        }
        
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: flat;
        }
        
        .flip-card-front {
          z-index: 2;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
          z-index: 1;
        }
        
        .flip-card-inner.flipped .flip-card-front {
          z-index: 1;
          pointer-events: none;
        }
        
        .flip-card-inner.flipped .flip-card-back {
          z-index: 2;
        }
        
        @media (hover: none) {
          .flip-card-container:active .flip-card-inner {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </PageTransition>
  );
}