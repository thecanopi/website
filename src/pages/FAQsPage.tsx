import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircleQuestion, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What services does Canopi Strategy Partners offer?",
    answer: `Canopi Strategy Partners is a boutique consulting firm focused on strategy, transformation, and execution, primarily within the healthcare ecosystem and adjacent sectors.

Our services include corporate and business strategy, operating model redesign, digital, data and AI strategy, branding and marketing, go-to-market and growth strategy, performance improvement, and healthcare innovation and venture advisory.`,
    category: "Services"
  },
  {
    question: "How does Canopi approach consulting engagements?",
    answer: `Our approach is structured, pragmatic, and outcome-oriented. We work closely with client leadership and teams to ensure alignment with business objectives and execution realities.

A typical engagement includes:
• Understanding the context and priorities through targeted discussions and data review
• Conducting focused diagnostics on the most critical issues
• Designing clear, actionable strategies tailored to the organization
• Enabling execution through roadmaps, governance, and metrics
• Reviewing progress and refining direction as needed`,
    category: "Process"
  },
  {
    question: "What if we already understand our problems and Canopi arrives at similar conclusions?",
    answer: `We recognize that many clients have a strong understanding of their challenges. In such situations, our role is to validate assumptions, bring external perspective, identify blind spots, structure trade-offs, and help translate understanding into decisive action.

Our value lies in sharpening thinking, accelerating decision-making, and supporting execution — not repeating known insights.`,
    category: "Process"
  },
  {
    question: "Does Canopi provide only strategy, or also execution support?",
    answer: "Canopi supports both strategy development and execution. While some engagements focus on strategy, many extend into implementation support, program management, and execution enablement based on client needs.",
    category: "Services"
  },
  {
    question: "Are Canopi's solutions standardized or customized?",
    answer: "All solutions are customized. While we draw on proven frameworks and best practices, each engagement is tailored to the client's context, objectives, and constraints.",
    category: "Process"
  },
  {
    question: "What is the typical duration of a consulting project?",
    answer: `Project duration depends on scope and geography:
• Typical projects: 4–6 weeks
• Domestic expansion initiatives: Approximately 3 months
• International expansion or multi-country programs: Longer-term engagements beyond 3 months

Timelines are defined upfront and agreed with the client.`,
    category: "Engagement"
  },
  {
    question: "How does Canopi price its services?",
    answer: `Canopi follows a project-based pricing approach. Pricing depends on factors such as the type of engagement, scope, duration, expertise required, and custom client requirements.

Each engagement is scoped individually, and pricing is discussed transparently before work begins.`,
    category: "Pricing"
  },
  {
    question: "Is the proposal or initial discussion a paid service?",
    answer: "Initial conversations to understand your context and objectives are typically offered at no cost. In cases where a detailed diagnostic or in-depth assessment is required to develop a proposal, this may be chargeable and will be discussed in advance.",
    category: "Pricing"
  },
  {
    question: "Does Canopi provide PMO or program management support?",
    answer: "Yes. Canopi provides program and initiative-level support for complex transformations, expansion programs, and multi-workstream initiatives. This includes planning, tracking, coordination, and governance support.",
    category: "Services"
  },
  {
    question: "How does Canopi measure the success of its engagements?",
    answer: "Success is defined collaboratively at the start of each engagement. Measurement typically includes achievement of agreed objectives, improvement in performance indicators, execution progress, stakeholder alignment, and sustainability of outcomes.",
    category: "Process"
  },
  {
    question: "What are the typical quick wins and long-term impacts of Canopi's work?",
    answer: `Our engagements are designed to deliver both near-term and long-term value.

Quick wins often include clearer priorities, faster decisions, and early operational improvements. Long-term impact includes stronger operating models, improved execution capability, and sustained performance improvement.`,
    category: "Results"
  },
  {
    question: "How does Canopi ensure data security and confidentiality?",
    answer: "Client confidentiality is fundamental to our work. We use appropriate confidentiality agreements, controlled data access, and secure information handling practices to protect sensitive information.",
    category: "Security"
  },
  {
    question: "What is the size and expertise of the Canopi team?",
    answer: "Canopi operates with a lean, senior-led team. Our consultants bring experience from leading consulting firms, healthcare organizations, and growth-stage ventures, enabling us to combine strategic rigor with practical execution insight.",
    category: "Team"
  },
  {
    question: "How involved are client teams during an engagement?",
    answer: "Client involvement is critical to success. We work closely with leadership and core teams throughout the engagement to ensure alignment, knowledge transfer, and practical adoption of recommendations.",
    category: "Process"
  },
  {
    question: "Does Canopi work with international clients or cross-border projects?",
    answer: "Yes. Canopi supports both domestic and international engagements. For cross-border work, we adapt our approach to local market dynamics, regulatory environments, and cultural considerations.",
    category: "Engagement"
  },
  {
    question: "How does Canopi use AI in its work?",
    answer: "We use modern analytical and digital tools to strengthen analysis, accelerate execution, and improve decision quality. Our use of AI supports human judgment rather than replacing it, and is applied selectively where it adds value.",
    category: "Technology"
  },
  {
    question: "What happens after a project concludes?",
    answer: "Many clients continue working with Canopi beyond the initial engagement for follow-on support, phased implementation, or advisory guidance. Post-engagement support is defined based on client needs.",
    category: "Engagement"
  },
  {
    question: "How does Canopi manage conflicts of interest?",
    answer: "We are selective in the work we take on and avoid engagements that present conflicts of interest. Transparency and trust are central to how we operate.",
    category: "Ethics"
  }
];

const categoryColors: Record<string, string> = {
  Services: 'from-purple-600 to-purple-500',
  Process: 'from-cyan-600 to-cyan-500',
  Pricing: 'from-amber-500 to-amber-400',
  Engagement: 'from-emerald-600 to-emerald-500',
  Results: 'from-pink-600 to-pink-500',
  Security: 'from-blue-600 to-blue-500',
  Team: 'from-indigo-600 to-indigo-500',
  Technology: 'from-orange-600 to-orange-500',
  Ethics: 'from-rose-600 to-rose-500',
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-accent/20 border border-accent/30">
                <MessageCircleQuestion className="w-7 h-7 text-accent" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-5">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Find answers to common questions about working with Canopi Strategy Partners
              </p>
              
              {/* Stats */}
              <div className="flex items-center gap-5 mt-8 text-primary-foreground/60 text-sm">
                <span>{faqs.length} Questions</span>
                <div className="w-px h-4 bg-primary-foreground/20" />
                <span>{Object.keys(categoryColors).length} Categories</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <RevealOnScroll key={index} delayMs={index * 40}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
                  >
                    <div className="px-5 py-1">
                      <AccordionTrigger className="text-left py-4 hover:no-underline">
                        <div className="flex items-start gap-3 w-full pr-3">
                          {/* Question number */}
                          <div className={cn(
                            "shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold",
                            "bg-gradient-to-br text-white",
                            categoryColors[faq.category] || 'from-gray-500 to-gray-400'
                          )}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            {/* Category badge */}
                            <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-medium mb-1.5 bg-muted text-muted-foreground">
                              {faq.category}
                            </span>
                            
                            {/* Question */}
                            <h3 className="text-base font-semibold text-foreground">
                              {faq.question}
                            </h3>
                          </div>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="pb-5">
                        <div className="pl-12">
                          <div className="text-muted-foreground whitespace-pre-line leading-relaxed text-sm">
                            {faq.answer}
                          </div>
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </RevealOnScroll>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Still have questions?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                If you have additional questions or would like to explore a potential engagement, our team is ready to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}