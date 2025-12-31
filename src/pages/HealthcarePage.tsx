import { useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PageTransition } from '@/components/shared/PageTransition';
import { Building2, Shield, Lightbulb, FlaskConical, Network, Heart, ChevronRight, ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const sectors = [
  {
    id: 'providers',
    title: 'Providers',
    icon: Building2,
    color: 'from-emerald-600 to-teal-500',
    bgColor: 'bg-emerald-50',
    items: [
      'Hospitals and Health Systems',
      'Primary Care and Ambulatory Services',
      'Specialty Care Networks',
      'Home Health and Remote Monitoring',
      'Rehabilitation and Long-Term Care',
      'Diagnostics and Imaging Centres',
    ],
  },
  {
    id: 'payers',
    title: 'Payers',
    icon: Shield,
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-blue-50',
    items: [
      'Health Insurance and Managed Care Organisations',
      'Digital Payer Platforms',
      'Employer Health and Benefits Programmes',
    ],
  },
  {
    id: 'innovators',
    title: 'Innovators',
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    items: [
      'Digital Health Platforms',
      'Healthcare AI Ventures',
      'Virtual Care and Telemedicine Solutions',
      'HealthTech Startups and Consumer Health Apps',
      'Remote Patient Monitoring and Connected Care Models',
    ],
  },
  {
    id: 'medtech',
    title: 'MedTech & Life Sciences',
    icon: FlaskConical,
    color: 'from-purple-600 to-pink-500',
    bgColor: 'bg-purple-50',
    items: [
      'Medical Devices and MedTech Companies',
      'Pharmaceutical Services and Commercial Support',
      'Lab Services and Diagnostic Technology Providers',
    ],
  },
  {
    id: 'enablers',
    title: 'Enablers & Ecosystem Partners',
    icon: Network,
    color: 'from-teal-600 to-emerald-500',
    bgColor: 'bg-teal-50',
    items: [
      'Revenue Cycle and Financial Services Providers',
      'Supply Chain, Procurement, and Logistics Partners',
      'Workforce and Staffing Solutions',
      'Data, Analytics, and Health Information Systems',
      'Patient Experience and Engagement Platforms',
    ],
  },
  {
    id: 'mission',
    title: 'Mission-Driven & Public Health',
    icon: Heart,
    color: 'from-rose-600 to-red-500',
    bgColor: 'bg-rose-50',
    items: [
      'Public Health Organisations',
      'Community Health Centres',
      'Non-Profit Hospitals',
      'NGOs and Foundations Focused on Health Equity',
      'Population Health and Community Care Programmes',
    ],
  },
];

const howWeHelp = [
  { title: 'Operational redesign and care pathway optimisation', icon: '🔄' },
  { title: 'Workforce strategy and productivity improvement', icon: '👥' },
  { title: 'Patient experience transformation', icon: '💫' },
  { title: 'Digital adoption and AI-enabled care', icon: '🤖' },
  { title: 'Revenue cycle and cost management', icon: '💰' },
  { title: 'Clinical and non-clinical performance improvement', icon: '📈' },
];

const impactStories = [
  {
    title: 'A 650-bed health system',
    description: 'We led a performance improvement programme that reduced operating costs by 18%, redesigned patient access workflows, and improved emergency department throughput.',
    stat: '18%',
    statLabel: 'Cost Reduction',
  },
  {
    title: 'Multi-specialty physician network',
    description: 'We developed a digital transformation roadmap that doubled telehealth adoption and improved patient satisfaction.',
    stat: '2x',
    statLabel: 'Telehealth Adoption',
  },
  {
    title: 'HealthTech startup',
    description: 'We built a pricing and commercialisation strategy for a remote monitoring solution that supported a successful funding raise.',
    stat: '$10M+',
    statLabel: 'Funding Raised',
  },
];

function SectorCard({ sector, index, isActive, onHover }: { 
  sector: typeof sectors[0]; 
  index: number; 
  isActive: boolean;
  onHover: () => void;
}) {
  const Icon = sector.icon;
  
  return (
    <div
      className={cn(
        "group relative cursor-pointer transition-all duration-300",
        "rounded-xl border overflow-hidden",
        isActive 
          ? "border-accent shadow-md" 
          : "border-border hover:border-accent/50 hover:shadow-sm"
      )}
      onMouseEnter={onHover}
    >
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          {/* Icon with gradient background */}
          <div className={cn(
            "w-11 h-11 rounded-lg flex items-center justify-center transition-transform duration-300",
            "bg-gradient-to-br",
            sector.color,
            isActive && "scale-105"
          )}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          
          {/* Title */}
          <div className="flex-1">
            <span className="text-xs text-muted-foreground font-medium">Sector {String(index + 1).padStart(2, '0')}</span>
            <h3 className={cn(
              "text-base font-serif font-bold transition-colors duration-200",
              isActive ? "text-accent" : "text-foreground"
            )}>
              {sector.title}
            </h3>
          </div>
          
          {/* Arrow indicator */}
          <ChevronRight className={cn(
            "w-4 h-4 transition-all duration-200",
            isActive ? "text-accent translate-x-0.5" : "text-muted-foreground"
          )} />
        </div>
        
        {/* Items list - expanded on active */}
        <div className={cn(
          "grid transition-all duration-400 overflow-hidden",
          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}>
          <div className="min-h-0">
            <ul className="space-y-1.5 pt-3 border-t border-border">
              {sector.items.map((item, i) => (
                <li 
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-gradient-to-r",
                    sector.color
                  )} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HealthcarePage() {
  const [activeSector, setActiveSector] = useState<string>('providers');

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <RevealOnScroll>
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">Industry Focus</p>
              </RevealOnScroll>
              <RevealOnScroll delayMs={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  Healthcare
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delayMs={200}>
                <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                  We help healthcare organisations transform how they operate, deliver 
                  care, and create value for patients, clinicians, and communities.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Where We Work Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title="Where We Work" 
              subtitle="Tap on any sector to explore the organizations we partner with"
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {sectors.map((sector, index) => (
                <RevealOnScroll key={sector.id} delayMs={index * 60}>
                  <SectorCard 
                    sector={sector} 
                    index={index}
                    isActive={activeSector === sector.id}
                    onHover={() => setActiveSector(sector.id)}
                  />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="text-center mb-10">
                <div className="accent-line mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">How We Help</h2>
                <p className="text-primary-foreground/70 max-w-xl mx-auto">
                  Our comprehensive approach addresses the full spectrum of healthcare challenges
                </p>
              </div>
            </RevealOnScroll>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {howWeHelp.map((item, index) => (
                <RevealOnScroll key={index} delayMs={index * 60}>
                  <div className="group p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/10 transition-all duration-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="text-xs text-accent font-medium">0{index + 1}</span>
                        <p className="text-sm font-medium text-primary-foreground/90">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title="Impact Stories" 
              subtitle="Real transformations delivering measurable results"
            />
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {impactStories.map((story, index) => (
                <RevealOnScroll key={index} delayMs={index * 80}>
                  <div className="h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                    {/* Top accent gradient */}
                    <div className="h-1 bg-gradient-to-r from-accent via-accent/80 to-accent" />
                    
                    <div className="p-5">
                      {/* Stat badge */}
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-xs font-medium text-muted-foreground">Case Study 0{index + 1}</span>
                        </div>
                        <div className="text-right p-2 rounded-lg bg-accent/10">
                          <div className="text-xl font-bold text-accent">{story.stat}</div>
                          <div className="text-[10px] text-muted-foreground uppercase">{story.statLabel}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-base font-serif font-bold text-foreground mb-2">
                        {story.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {story.description}
                      </p>
                      
                      <div className="mt-4 pt-3 border-t border-border">
                        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                          Learn more 
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <RevealOnScroll>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Ready to Transform Your Healthcare Organization?
                </h2>
                <p className="text-primary-foreground/80 mb-8">
                  Let's discuss how we can help you achieve operational excellence and better patient outcomes.
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