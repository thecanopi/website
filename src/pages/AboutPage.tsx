import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PageTransition } from '@/components/shared/PageTransition';
import { Eye, Zap, Users, Handshake, Lightbulb, ArrowRight, Target, Rocket } from 'lucide-react';
import { useState } from 'react';

const values = [
  { icon: Eye, title: 'Clarity over complexity', description: 'We cut through noise to deliver actionable insights' },
  { icon: Zap, title: 'Speed with substance', description: 'Fast execution without compromising quality' },
  { icon: Users, title: 'People over PowerPoints', description: 'Real partnerships, not just presentations' },
  { icon: Handshake, title: 'Trust-led partnerships', description: 'Building lasting relationships through integrity' },
  { icon: Lightbulb, title: 'Innovation with accountability', description: 'Bold ideas backed by measurable results' },
];

const timeline = [
  { year: 'The Beginning', title: 'Founded by Visionaries', description: 'Canopi began as a small advisory practice founded by strategists who had spent their careers inside large consulting firms and fast-growing startups.' },
  { year: 'The Gap', title: 'Identifying the Need', description: 'They saw a gap: leaders needed top-tier strategic clarity, but also hands-on partners who could help bring ideas to life — not just leave behind decks.' },
  { year: 'Growth', title: 'Expanding Our Reach', description: 'What started as a 2-person advisory is now a multi-disciplinary firm working with clients across healthcare, technology, consumer services, and mission-driven sectors.' },
  { year: 'Today', title: 'Our Foundation', description: 'We remain grounded in our founding belief: great consulting is not just about expertise — it is about empathy, precision, and partnership.' },
];

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <RevealOnScroll>
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">About Canopi Strategy Partners</p>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  Who We Are
                </h1>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={200}>
                <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                  A modern consulting firm that helps organisations navigate 
                  complexity, accelerate growth, and transform with confidence.
                </p>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={300}>
                <div className="flex items-center justify-center gap-8 mt-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">10+</div>
                    <div className="text-sm text-primary-foreground/60">Years Experience</div>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">50+</div>
                    <div className="text-sm text-primary-foreground/60">Clients Served</div>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">4</div>
                    <div className="text-sm text-primary-foreground/60">Industries</div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <RevealOnScroll>
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      <Target className="w-4 h-4 text-accent" />
                      <span className="text-accent text-sm font-medium">Our Focus</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                      At the Intersection of Strategy & Execution
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We sit at the intersection of strategy, operations, technology, and leadership — bringing 
                      a balanced blend of creativity, analytical discipline, and execution strength.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe the consulting firms of the future won't just deliver recommendations — they 
                      will build capabilities, embed intelligence, and move at the speed of change.
                    </p>
                  </div>
                </RevealOnScroll>
                
                <RevealOnScroll delayMs={150}>
                  <div className="bg-primary rounded-xl p-7 shadow-lg">
                    <Rocket className="w-10 h-10 text-accent mb-5" />
                    <h3 className="text-xl font-bold mb-3 text-primary-foreground">Our Mission</h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      To empower leaders and organisations to make smarter decisions, move faster, and unlock 
                      lasting impact through the synergy of human expertise and intelligent technology.
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">Our Philosophy</span>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={100}>
                <blockquote className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight mb-6">
                  "AI won't replace leaders — but leaders who harness AI will outperform."
                </blockquote>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={150}>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We embed modern tools, data, and insights into every engagement, helping clients 
                  transform how they think, operate, and grow.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">What Drives Us</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Our Core Values
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {values.map((value, index) => (
                  <RevealOnScroll key={index} delayMs={index * 80}>
                    <div className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-200">
                      <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <value.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Timeline Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Our Journey</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  The Canopi Story
                </h2>
              </div>
            </RevealOnScroll>
            
            <div className="max-w-3xl mx-auto">
              {/* Timeline navigation */}
              <RevealOnScroll delayMs={80}>
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                  {timeline.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTimeline(index)}
                      className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                        activeTimeline === index 
                          ? 'bg-accent text-accent-foreground shadow-sm' 
                          : 'bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border'
                      }`}
                    >
                      {item.year}
                    </button>
                  ))}
                </div>
              </RevealOnScroll>
              
              {/* Active timeline content */}
              <RevealOnScroll delayMs={120}>
                <div className="bg-card rounded-xl p-7 border border-border shadow-sm">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-lg">{activeTimeline + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {timeline[activeTimeline].title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {timeline[activeTimeline].description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex gap-2 mt-6">
                    {timeline.map((_, index) => (
                      <div 
                        key={index}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          index === activeTimeline ? 'bg-accent' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Ready to Work Together?
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  Let's explore how Canopi can help your organisation thrive.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}