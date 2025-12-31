import { Target, Lightbulb, Rocket, Users } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';

const values = [
  {
    icon: Target,
    title: 'Strategy you can act on immediately',
  },
  {
    icon: Lightbulb,
    title: 'AI-powered insights for better, faster decisions',
  },
  {
    icon: Rocket,
    title: 'Execution support from start to scale',
  },
  {
    icon: Users,
    title: 'A team that equips your people — not replaces them',
  },
];

export function ValuePropositions() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Built for leaders who want results — not just reports, but both"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <RevealOnScroll key={index} delayMs={index * 50}>
              <div className="value-card group h-full">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3">
                  <value.icon className="h-5 w-5 text-accent" />
                </div>
                <p className="font-medium text-foreground">{value.title}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}