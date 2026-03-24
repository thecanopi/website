import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { PageTransition } from '@/components/shared/PageTransition';
import pageBg from '@/assets/page-bg-abstract.jpg';
import drAnupamaImg from '@/assets/Dr Anupama.jpg';
import drVikramImg from '@/assets/Dr Vikram.jpg';

export default function TeamPage() {
    return (
        <PageTransition>
            <div className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 text-white overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${pageBg})` }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <RevealOnScroll>
                                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">Leadership</p>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Team</h1>
                                <p className="text-lg text-white/80">
                                    Meet the experts driving innovation, strategy, and excellence at Canopi.
                                </p>
                            </RevealOnScroll>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

                            {/* Dr. Anupama Srikonda */}
                            <RevealOnScroll delayMs={100}>
                                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                    <div className="aspect-square sm:aspect-[4/3] relative overflow-hidden">
                                        <img
                                            src={drAnupamaImg}
                                            alt="Dr. Anupama Srikonda"
                                            className="object-contain w-full h-full p-4"
                                        />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-1">Dr. Anupama Srikonda</h3>
                                        <p className="text-accent font-medium mb-4">Founder & CEO — Partner, Healthcare Strategy</p>
                                        <p className="text-muted-foreground leading-relaxed flex-1">
                                            Dr. Anupama is the Founder & CEO of Canopi Strategy Partners, where she leads data-driven strategy and commercial due diligence projects for healthcare and life sciences companies and investors. A former Director and Vice President in strategy consulting, she specializes in assessing the commercial potential of innovations across AI in healthcare, digital health, and biotechnology using real-time market insights. As a clinician turned strategy leader, she bridges science, medicine, and business to translate complex innovations into scalable market opportunities. She is an alumnus of the Indian School of Business (ISB).
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            {/* Dr. Vikram Venkateswaran */}
                            <RevealOnScroll delayMs={200}>
                                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                    <div className="aspect-square sm:aspect-[4/3] relative overflow-hidden">
                                        <img
                                            src={drVikramImg}
                                            alt="Dr. Vikram Venkateswaran"
                                            className="object-contain w-full h-full p-4"
                                        />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-1">Dr. Vikram Venkateswaran</h3>
                                        <p className="text-accent font-medium mb-4">Advisory Member</p>
                                        <p className="text-muted-foreground leading-relaxed flex-1">
                                            A healthcare strategist, clinician, and Founder of Healthcare India. A former healthcare leader at Deloitte, he advises startups, investors, and health systems on innovation, AI, and growth strategy. He writes and speaks frequently on the future of healthcare, technology, and global health.
                                        </p>
                                    </div>
                                </div>
                            </RevealOnScroll>

                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
