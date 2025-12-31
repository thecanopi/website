import { useState, useEffect, useRef } from 'react';
import { Target, Users, BarChart3, CheckCircle, GraduationCap, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: 'diagnose',
    number: '01',
    shortTitle: 'Diagnose',
    title: 'Diagnose with depth.',
    description: 'We begin by understanding your business from every angle — people, processes, data, and the market — to uncover the core problems and root opportunities.',
    icon: Target,
    color: '#7c3aed',
  },
  {
    id: 'cocreate',
    number: '02',
    shortTitle: 'Co-create',
    title: 'Co-create solutions with you.',
    description: 'We build strategies with teams, not for them. This accelerates buy-in and reduces time to implementation.',
    icon: Users,
    color: '#0891b2',
  },
  {
    id: 'ai',
    number: '03',
    shortTitle: 'AI & Analytics',
    title: 'Use AI and analytics as force multipliers.',
    description: 'From forecasting and modelling to automation and workflow intelligence — we integrate advanced tools where they create the highest lift.',
    icon: BarChart3,
    color: '#d97706',
  },
  {
    id: 'execute',
    number: '04',
    shortTitle: 'Execute',
    title: 'Execute with precision.',
    description: 'Our teams embed alongside your teams to translate plans into actions, KPIs, and measurable outcomes.',
    icon: CheckCircle,
    color: '#059669',
  },
  {
    id: 'transfer',
    number: '05',
    shortTitle: 'Transfer',
    title: 'Transfer capability.',
    description: 'We aim to leave you smarter, faster, and more independent than when we arrived.',
    icon: GraduationCap,
    color: '#db2777',
  },
];

export function OrbitSection() {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [visibleNodes, setVisibleNodes] = useState<string[]>([]);
  const [centerVisible, setCenterVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbitRadius = 180;

  // Staggered load animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setCenterVisible(true), 100);
            steps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleNodes((prev) => [...prev, step.id]);
              }, 400 + index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.orbit-node') && !target.closest('.orbit-tooltip')) {
        setActiveNodeId(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden min-h-[700px] lg:min-h-[800px] bg-slate-900"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Orbit View */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Orbit ring */}
            <div 
              className="absolute inset-0 rounded-full border border-slate-700"
              style={{
                opacity: centerVisible ? 1 : 0,
                transform: centerVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
              }}
            />

            {/* SVG for connector lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
              {steps.map((step, index) => {
                const angleRad = ((index * 72) - 90) * (Math.PI / 180);
                const x = 250 + orbitRadius * Math.cos(angleRad);
                const y = 250 + orbitRadius * Math.sin(angleRad);
                const isActive = activeNodeId === step.id;
                const isVisible = visibleNodes.includes(step.id);
                
                return (
                  <line
                    key={step.id}
                    x1="250"
                    y1="250"
                    x2={x}
                    y2={y}
                    stroke={isActive ? step.color : '#475569'}
                    strokeWidth={isActive ? 2 : 1}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: 'opacity 400ms ease-out, stroke 300ms ease-out, stroke-width 300ms ease-out',
                    }}
                  />
                );
              })}
            </svg>

            {/* Center node */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                opacity: centerVisible ? 1 : 0,
                transform: centerVisible 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -50%) scale(0.9)',
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
              }}
            >
              <div className="relative w-36 h-36 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-serif font-bold text-center text-lg px-4 leading-tight">
                  How We<br />Work
                </span>
              </div>
            </div>

            {/* Orbit nodes */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              const angleRad = ((index * 72) - 90) * (Math.PI / 180);
              const x = orbitRadius * Math.cos(angleRad);
              const y = orbitRadius * Math.sin(angleRad);
              const isActive = activeNodeId === step.id;
              const isVisible = visibleNodes.includes(step.id);

              // Calculate tooltip position
              const tooltipPosition = () => {
                if (index === 0) return 'top-full mt-4 left-1/2 -translate-x-1/2';
                if (index === 1) return 'left-full ml-4 top-0';
                if (index === 2) return 'left-full ml-4 bottom-0';
                if (index === 3) return 'right-full mr-4 bottom-0';
                return 'right-full mr-4 top-0';
              };

              return (
                <div
                  key={step.id}
                  className="orbit-node absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 400ms ease-out',
                    zIndex: isActive ? 100 : 30,
                  }}
                  onMouseEnter={() => setActiveNodeId(step.id)}
                  onMouseLeave={() => setActiveNodeId(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveNodeId(activeNodeId === step.id ? null : step.id);
                  }}
                >
                  {/* Node circle */}
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300"
                    style={{
                      backgroundColor: step.color,
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: isActive 
                        ? `0 0 0 4px ${step.color}40, 0 4px 12px rgba(0,0,0,0.3)` 
                        : '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Short label below node */}
                  <div 
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: 'opacity 400ms ease-out 200ms',
                    }}
                  >
                    <span className="text-slate-300 text-sm font-medium">
                      {step.shortTitle}
                    </span>
                  </div>

                  {/* Tooltip - solid background */}
                  <div
                    className={cn(
                      "orbit-tooltip absolute w-80 p-5 rounded-xl",
                      tooltipPosition()
                    )}
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1)' : 'scale(0.95)',
                      pointerEvents: isActive ? 'auto' : 'none',
                      transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
                      backgroundColor: '#1e293b',
                      border: `2px solid ${step.color}`,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                      zIndex: 200,
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-colors hover:bg-slate-700"
                      style={{ color: step.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveNodeId(null);
                      }}
                    >
                      <X className="h-3 w-3" />
                    </button>
                    
                    {/* Step number */}
                    <div 
                      className="text-xs font-bold mb-2"
                      style={{ color: step.color }}
                    >
                      Step {step.number}
                    </div>
                    
                    {/* Title */}
                    <h4 
                      className="font-serif font-bold text-lg mb-3 pr-6 text-white"
                    >
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Orbit View */}
        <div className="lg:hidden flex items-center justify-center py-8">
          <div className="relative w-[340px] h-[340px]">
            {/* Orbit ring */}
            <div 
              className="absolute inset-0 rounded-full border border-slate-700"
              style={{
                opacity: centerVisible ? 1 : 0,
                transform: centerVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 600ms ease-out, transform 600ms ease-out',
              }}
            />

            {/* SVG for connector lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 340">
              {steps.map((step, index) => {
                const mobileRadius = 120;
                const angleRad = ((index * 72) - 90) * (Math.PI / 180);
                const x = 170 + mobileRadius * Math.cos(angleRad);
                const y = 170 + mobileRadius * Math.sin(angleRad);
                const isActive = activeNodeId === step.id;
                const isVisible = visibleNodes.includes(step.id);
                
                return (
                  <line
                    key={step.id}
                    x1="170"
                    y1="170"
                    x2={x}
                    y2={y}
                    stroke={isActive ? step.color : '#475569'}
                    strokeWidth={isActive ? 2 : 1}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: 'opacity 400ms ease-out, stroke 300ms ease-out',
                    }}
                  />
                );
              })}
            </svg>

            {/* Center node */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                opacity: centerVisible ? 1 : 0,
                transform: centerVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.9)',
                transition: 'opacity 500ms ease-out, transform 500ms ease-out',
              }}
            >
              <div className="relative w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-serif font-bold text-center text-sm px-2 leading-tight">
                  How We<br />Work
                </span>
              </div>
            </div>

            {/* Mobile Orbit nodes */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              const mobileRadius = 120;
              const angleRad = ((index * 72) - 90) * (Math.PI / 180);
              const x = mobileRadius * Math.cos(angleRad);
              const y = mobileRadius * Math.sin(angleRad);
              const isActive = activeNodeId === step.id;
              const isVisible = visibleNodes.includes(step.id);

              return (
                <div
                  key={step.id}
                  className="orbit-node absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 400ms ease-out',
                    zIndex: isActive ? 100 : 30,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveNodeId(activeNodeId === step.id ? null : step.id);
                  }}
                >
                  {/* Node circle */}
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300"
                    style={{
                      backgroundColor: step.color,
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      boxShadow: isActive 
                        ? `0 0 0 3px ${step.color}40, 0 4px 12px rgba(0,0,0,0.3)` 
                        : '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Short label */}
                  <div 
                    className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
                    style={{ 
                      opacity: isVisible && !isActive ? 1 : 0, 
                      transition: 'opacity 300ms ease-out' 
                    }}
                  >
                    <span className="text-slate-400 text-xs font-medium">{step.shortTitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Tooltip - Positioned below orbit */}
        {activeNodeId && (
          <div className="lg:hidden mt-8 px-4 pb-4">
            {steps.filter(s => s.id === activeNodeId).map((step) => (
              <div
                key={step.id}
                className="orbit-tooltip relative p-5 rounded-xl mx-auto max-w-md"
                style={{
                  backgroundColor: '#1e293b',
                  border: `2px solid ${step.color}`,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-slate-700"
                  style={{ color: step.color }}
                  onClick={(e) => { e.stopPropagation(); setActiveNodeId(null); }}
                >
                  <X className="h-4 w-4" />
                </button>
                
                {/* Step number */}
                <div 
                  className="text-xs font-bold mb-2"
                  style={{ color: step.color }}
                >
                  Step {step.number}
                </div>
                
                {/* Title with icon */}
                <div className="flex items-start gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-serif font-bold text-lg leading-tight pr-6 text-white">
                    {step.title}
                  </h4>
                </div>
                
                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}