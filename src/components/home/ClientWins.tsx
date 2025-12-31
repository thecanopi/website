import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { TrendingDown, Users, TrendingUp, Database } from 'lucide-react';

const wins = [
  {
    icon: TrendingDown,
    stat: 18,
    suffix: '%',
    description: 'Reduced operating costs for a regional health system within 9 months',
  },
  {
    icon: Users,
    stat: 250,
    suffix: 'k',
    description: 'Users reached in first year with a digital care platform launch',
  },
  {
    icon: TrendingUp,
    stat: 34,
    suffix: '%',
    description: 'Revenue boost from revitalised go-to-market strategy',
  },
  {
    icon: Database,
    stat: 100,
    suffix: '%',
    prefix: '',
    description: 'Enterprise-wide AI adoption enabled through data governance model',
  },
];

export function ClientWins() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Client Wins"
          subtitle="Real results from real partnerships"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {wins.map((win, index) => (
            <RevealOnScroll key={index} delayMs={index * 50}>
              <div className="stat-card">
                <div className="w-10 h-10 mx-auto mb-3 rounded-md bg-accent/10 flex items-center justify-center">
                  <win.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2">
                  <AnimatedCounter 
                    end={win.stat} 
                    suffix={win.suffix} 
                    prefix={win.prefix}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {win.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}