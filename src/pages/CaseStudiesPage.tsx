import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ChevronDown, Quote, Target, TrendingUp, Building2, Zap, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { PageTransition } from '@/components/shared/PageTransition';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import pageBg from '@/assets/page-bg-abstract.jpg';

interface CaseStudy {
  id: string;
  title: string;
  industry: string | null;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[] | null;
  display_order: number | null;
}

const industryIcons: Record<string, React.ReactNode> = {
  'Healthcare': <Building2 className="h-4 w-4" />,
  'AI Innovation': <TrendingUp className="h-4 w-4" />,
  'Life Sciences': <Target className="h-4 w-4" />,
  'HealthTech': <TrendingUp className="h-4 w-4" />,
  'Market Research': <TrendingUp className="h-4 w-4" />,
  'Education': <Building2 className="h-4 w-4" />,
};

const industryColors: Record<string, { gradient: string; bg: string }> = {
  'Healthcare': { gradient: 'from-purple-600 to-purple-500', bg: 'bg-purple-50' },
  'AI Innovation': { gradient: 'from-amber-500 to-amber-400', bg: 'bg-amber-50' },
  'Life Sciences': { gradient: 'from-emerald-600 to-emerald-500', bg: 'bg-emerald-50' },
  'HealthTech': { gradient: 'from-blue-600 to-blue-500', bg: 'bg-blue-50' },
  'Market Research': { gradient: 'from-orange-600 to-orange-500', bg: 'bg-orange-50' },
  'Education': { gradient: 'from-pink-600 to-pink-500', bg: 'bg-pink-50' },
};

function CaseStudyCard({ 
  study, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  study: CaseStudy; 
  index: number; 
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const colors = study.industry ? industryColors[study.industry] || { gradient: 'from-primary to-primary/80', bg: 'bg-primary/5' } : { gradient: 'from-primary to-primary/80', bg: 'bg-primary/5' };
  const isEven = index % 2 === 0;

  return (
    <RevealOnScroll delayMs={index * 60}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer",
          "border border-border",
          isEven ? "bg-card" : "bg-secondary/30",
          "hover:border-accent/40 hover:shadow-md",
          isExpanded && "shadow-lg border-accent/50"
        )}
        onClick={onToggle}
      >
        <div className="p-6 md:p-8">
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Case Study Number Badge */}
              <div className={cn(
                "flex items-center justify-center w-12 h-12 rounded-xl font-serif font-bold text-lg text-white",
                "bg-gradient-to-br",
                colors.gradient
              )}>
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Industry Badge */}
              {study.industry && (
                <span className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
                  "bg-gradient-to-r text-white",
                  colors.gradient
                )}>
                  {industryIcons[study.industry]}
                  {study.industry}
                </span>
              )}
            </div>

            {/* Expand Button */}
            <button className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
              "bg-secondary hover:bg-accent hover:text-accent-foreground",
              isExpanded && "bg-accent text-accent-foreground rotate-180"
            )}>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {study.title}
          </h3>

          {/* Tags */}
          {study.tags && study.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Challenge Preview */}
          <div className="flex items-start gap-3">
            <div className={cn(
              "flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center mt-0.5",
              colors.bg
            )}>
              <Target className="h-3.5 w-3.5 text-foreground/70" />
            </div>
            <p className={cn(
              "text-muted-foreground leading-relaxed",
              isExpanded ? "" : "line-clamp-2"
            )}>
              <span className="font-medium text-foreground">Challenge: </span>
              {study.challenge}
            </p>
          </div>

          {/* Expanded Content */}
          <div className={cn(
            "grid transition-all duration-400 overflow-hidden",
            isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
          )}>
            <div className="min-h-0">
              <div className="pt-6 border-t border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Solution */}
                  <div className={cn("p-5 rounded-xl border border-border", colors.bg)}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center text-white",
                        "bg-gradient-to-br",
                        colors.gradient
                      )}>
                        <Zap className="h-4 w-4" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">Solution</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="p-5 rounded-xl border border-border bg-green-50">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">Outcome</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                {/* Learn more CTA */}
                <div className="mt-5 flex justify-end">
                  <button className={cn(
                    "inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium text-white transition-colors",
                    "bg-gradient-to-r hover:opacity-90",
                    colors.gradient
                  )}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
          "bg-gradient-to-r",
          colors.gradient
        )} />
      </div>
    </RevealOnScroll>
  );
}

export default function CaseStudiesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ['case-studies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data as CaseStudy[];
    },
  });

  const { data: testimonials, isLoading: testimonialsLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">Our Work</p>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  Case Studies
                </h1>
              </RevealOnScroll>
              
              <RevealOnScroll delayMs={200}>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                  Real transformations. Measurable results. Lasting partnerships across Healthcare, AI, Life Sciences, and beyond.
                </p>
              </RevealOnScroll>

            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="max-w-4xl mx-auto mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Explore Our Success Stories
                </h2>
              </div>
            </RevealOnScroll>

            {isLoading ? (
              <div className="max-w-4xl mx-auto space-y-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-40 rounded-xl" />
                ))}
              </div>
            ) : caseStudies && caseStudies.length > 0 ? (
              <div className="max-w-4xl mx-auto space-y-6">
                {caseStudies.map((study, index) => (
                  <CaseStudyCard 
                    key={study.id} 
                    study={study} 
                    index={index} 
                    isExpanded={expandedId === study.id}
                    onToggle={() => handleToggle(study.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                No case studies available yet.
              </div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="max-w-4xl mx-auto mb-10 text-center">
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">Testimonials</p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                  What Our Clients Say
                </h2>
                <p className="text-muted-foreground">
                  Trusted by leaders across industries
                </p>
              </div>
            </RevealOnScroll>

            {testimonialsLoading ? (
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-36 rounded-xl" />
                ))}
              </div>
            ) : testimonials && testimonials.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <RevealOnScroll key={testimonial.id} delayMs={index * 80}>
                    <div className="relative p-6 rounded-xl bg-card border border-border">
                      <Quote className="absolute top-4 left-4 h-8 w-8 text-accent/20" />
                      <blockquote className="text-foreground/90 italic leading-relaxed mb-4 pl-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="pl-6">
                        <p className="text-sm font-medium text-accent">
                          — {testimonial.author_role}
                        </p>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Ready to Create Your Success Story?
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  Let's discuss how we can help transform your organisation.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Get Started
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